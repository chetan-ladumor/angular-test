var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { throwError } from 'rxjs';
//import 'rxjs/add/operator/catch'; New version of rxjs no longer supports single imports, instead try: 
import { catchError } from "rxjs/operators";
import { AppError } from 'src/app/common/app-error';
import { NotFoundError } from 'src/app/common/not-found-error';
import { BadInput } from 'src/app/common/bad-input';
var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.url = 'http://jsonplaceholder.typicode.com/posts';
    }
    PostService.prototype.getPost = function () {
        return this.http.get(this.url);
    };
    PostService.prototype.insertPost = function (post) {
        return this.http.post(this.url, JSON.stringify(post))
            .pipe(catchError(function (error) {
            if (error.status === 400) {
                return throwError(new BadInput(error.json()));
            }
            return throwError(new AppError(eror.json()));
        }));
    };
    PostService.prototype.updatePostService = function (post) {
        return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isread: true }));
    };
    PostService.prototype.deletePostService = function (id) {
        return this.http.delete(this.url + '/' + id)
            .pipe(catchError(function (error) {
            if (error.status === 404) {
                return throwError(new NotFoundError(error.json()));
            }
            return throwError(new AppError(error));
        }));
    };
    PostService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Http])
    ], PostService);
    return PostService;
}());
export { PostService };
//# sourceMappingURL=post.service.js.map