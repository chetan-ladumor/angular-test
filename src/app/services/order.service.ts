import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import {catchError,map} from "rxjs/operators";
import { AuthHttp } from 'angular2-jwt';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

   constructor(private http: Http) { }
  //constructor(private http: AuthHttp) { }

  getOrders() { 

    let headers= new Headers();
    let token = localStorage.getItem('token');
    headers.append('Authorization','Bearer '+ token);

    let options = new RequestOptions({headers: headers});

    
    return this.http.get('/api/orders',options)
      .pipe(
        map( response => response.json() )
      )
      
  }

}
