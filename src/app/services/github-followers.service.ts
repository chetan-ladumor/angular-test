import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from 'src/app/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService {

  constructor(http: Http) {
    super(http,'https://api.github.com/users/mosh-hamedani/followers');
   }
}
