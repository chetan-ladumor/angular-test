import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable, EMPTY, throwError } from 'rxjs';
//import 'rxjs/add/operator/catch'; New version of rxjs no longer supports single imports, instead try: 
import {catchError,map} from "rxjs/operators";
import { Response } from '@angular/http/src/static_response';
import { AppError } from 'src/app/common/app-error';
import { NotFoundError } from 'src/app/common/not-found-error';
import { BadInput } from 'src/app/common/bad-input';
import { ErrorHandler } from '@angular/core/src/error_handler';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: Http, private url: string) { }

  getAll() {
    return this.http.get(this.url).pipe(map( response=>response.json() ) , catchError(this.handleError) );
  }

  insert(resource) {
   return  this.http.post(this.url,JSON.stringify(resource))
                    .pipe(
                      // catchError( (error:Response)=>{
                      //   if(error.status === 400)
                      //   {
                      //     return throwError(new BadInput(error.json()));
                      //   }
                      //   return throwError(new AppError(eror.json()));
                      // })

                      map( response=>response.json() ), catchError(this.handleError)
                    );
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id,JSON.stringify({isread: true}))
                     .pipe(map( response=>response.json() ), catchError(this.handleError));
  }

  delete(id) {
   return this.http.delete(this.url + '/' + id)
                  .pipe(
                    // catchError( (error: Response) =>{
                    //   if(error.status === 404)
                    //   {
                    //     return throwError(new NotFoundError(error.json()));
                    //   }
                    //  return throwError( new AppError(error) );
                    // })

                    map( response=>response.json() ), catchError(this.handleError)
                  );
  }

  private handleError( error: Response  ) {
    if(error.status === 400)
    {
      return throwError(new BadInput(error.json()));
    }
    if(error.status === 404)
    {
      return throwError(new NotFoundError(error.json()));
    }
    return throwError( new AppError(error) );
  }

}
