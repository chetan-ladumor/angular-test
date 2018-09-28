import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from 'src/app/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  
  //inherit the dataservice classes
  constructor(http: Http) {
    super(http, 'http://jsonplaceholder.typicode.com/posts');
  }


  //code commented because we are using reusable data services (data.service.ts)




  // getPost() {
  //   return this.http.get(this.url).pipe(catchError(this.handleError));
  // }

  // insertPost(post) {
  //  return  this.http.post(this.url,JSON.stringify(post))
  //                   .pipe(
  //                     // catchError( (error:Response)=>{
  //                     //   if(error.status === 400)
  //                     //   {
  //                     //     return throwError(new BadInput(error.json()));
  //                     //   }
  //                     //   return throwError(new AppError(eror.json()));
  //                     // })
  //                     catchError(this.handleError)
  //                   );
  // }

  // updatePostService(post) {
  //   return this.http.patch(this.url + '/' + post.id,JSON.stringify({isread: true}))
  //                    .pipe(catchError(this.handleError));
  // }

  // deletePostService(id) {
  //  return this.http.delete(this.url + '/' + id)
  //                 .pipe(
  //                   // catchError( (error: Response) =>{
  //                   //   if(error.status === 404)
  //                   //   {
  //                   //     return throwError(new NotFoundError(error.json()));
  //                   //   }
  //                   //  return throwError( new AppError(error) );
  //                   // })

  //                   catchError(this.handleError)
  //                 );
  // }

  // private handleError( error: Response  ) {
  //   if(error.status === 400)
  //   {
  //     return throwError(new BadInput(error.json()));
  //   }
  //   if(error.status === 404)
  //   {
  //     return throwError(new NotFoundError(error.json()));
  //   }
  //   return throwError( new AppError(error) );
  // }

}
