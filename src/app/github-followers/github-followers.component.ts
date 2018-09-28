import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from 'src/app/services/github-followers.service';
import { Observable, combineLatest  } from 'rxjs';
import {map, switchMap} from "rxjs/operators";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];
  constructor(private service: GithubFollowersService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    // combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ]).subscribe(
    //   combined=>{
    //     let id = combined[0].get('userid');
    //     let page= combined[1].get('page');
    //     console.log(page);
    //     // this.service.getAll({id: id, page: page});  //passing params to get next records for pagination
    //     this.service.getAll()
    //     .subscribe(followers => this.followers = followers);
    //   }
    // );

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(
      switchMap(
          combined=>{
            let id = combined[0].get('userid');
            let page= combined[1].get('page');
            console.log(page);
            return this.service.getAll();
          }
      )
    ).
    subscribe(followers => this.followers = followers);
   
  }

}
