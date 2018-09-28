import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Observable, EMPTY, throwError } from 'rxjs';
import {catchError,map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  login(credentials) {
    return this.http.post( '/api/authenticate', JSON.stringify(credentials) )
       .pipe(
         map(
           response=>{
            console.log(response.json());
            let result = response.json();
            if(result && result.token) {
              localStorage.setItem('token',result.token);
              return true;
            }
            return false; 
            
           }
         )
       );

       //post returns observable response but here we don't want to exponse response object,we 
       //want to return  true or false so here we going to use map operator 
   }
 
   logout() { 
     localStorage.removeItem('token');
   }
 
   isLoggedIn() { 
     return tokenNotExpired();
    //  let jwtHelper = new JwtHelper();
    //  let token = localStorage.getItem('token');
     
    //  if(!token) {
    //    return false;
    //  }

    //  let expirationdate= jwtHelper.getTokenExpirationDate(token);
    //  let isExpired = jwtHelper.isTokenExpired(token);
    //  console.log("Expiration",expirationdate);
    //  console.log("isExpiredx",isExpired);
    //  return !isExpired;
   }

   get currentUser() {  // this is not a method it is a properties
     let token = localStorage.getItem('token');
     if(!token) return false;

     let jwtHelper = new JwtHelper();
     return jwtHelper.decodeToken(token);
   }

}
