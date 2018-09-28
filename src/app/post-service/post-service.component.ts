import { Component, OnInit } from '@angular/core';

import { PostService } from 'src/app/services/post.service';
import { Response } from '@angular/http/src/static_response';
import { AppError } from 'src/app/common/app-error';
import { NotFoundError } from 'src/app/common/not-found-error';
import { BadInput } from 'src/app/common/bad-input';

@Component({
  selector: 'app-post-service',
  templateUrl: './post-service.component.html',
  styleUrls: ['./post-service.component.css']
})
export class PostServiceComponent implements OnInit {
  posts: any[];
  
  constructor(private service: PostService) { 
    
  }
  
  ngOnInit() {
    this.service.getAll()
        .subscribe( 
            posts=>{
              console.log(posts);
              this.posts = posts;
            },
        );
  }

  createPost(input: HTMLInputElement){
    let post= {title: input.value};
    this.posts.splice(0,0,post);  // optimists approach
    input.value='';
    this.service.insert(post)
             .subscribe(
                newPost=>{
                  console.log(newPost);
                  post['id'] = newPost.id;
                  //this.posts.splice(0,0,post); //remove because we are using optimistic approach
                },
                (error: AppError)=>{
                  this.posts.splice(0,1); // if we got any error in adding data revert it
                  if(error instanceof BadInput)
                  {
                    //this.form.setError(error.originalError);
                    alert("Bad Request.Data already exixts")
                  }
                  else throw error;
                  
                }
              );
  }

  updatePost(post) {
    this.service.update(post)
                        .subscribe(
                          updatedPost=>{
                            console.log(updatedPost);
                          },
                        );
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);

    this.service.delete(post.id)
              .subscribe(
                  // () =>{  //as we are not getting anything into response
                  // //let index = this.posts.indexOf(post);
                  // //this.posts.splice(index,1);
                  // },
                  null,
                  (error: AppError)=>{ //to get an intelligence of error message,can get access of all the member of error class
                    
                    this.posts.splice(index,0,post); //rollback meand add post
                    if(error instanceof NotFoundError)
                    {
                      alert("This post already been deleted");
                      console.log(error.originalError);
                    }
                    else throw error;
                   
                  }
              );
  }

  

}
