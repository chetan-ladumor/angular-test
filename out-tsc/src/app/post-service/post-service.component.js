var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { NotFoundError } from 'src/app/common/not-found-error';
import { BadInput } from 'src/app/common/bad-input';
var PostServiceComponent = /** @class */ (function () {
    function PostServiceComponent(service) {
        this.service = service;
    }
    PostServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getPost()
            .subscribe(function (response) {
            console.log(response.json());
            _this.posts = response.json();
        });
    };
    PostServiceComponent.prototype.createPost = function (input) {
        var _this = this;
        var post = { title: input.value };
        input.value = '';
        this.service.insertPost(post)
            .subscribe(function (response) {
            console.log(response.json());
            post['id'] = response.json().id;
            _this.posts.splice(0, 0, post);
        }, function (error) {
            if (error instanceof BadInput) {
                //this.form.setError(error.originalError);
                alert("Bad Request.Data already exixts");
            }
            else
                throw error;
        });
    };
    PostServiceComponent.prototype.updatePost = function (post) {
        this.service.updatePostService(post)
            .subscribe(function (response) {
            console.log(response.json());
        });
    };
    PostServiceComponent.prototype.deletePost = function (post) {
        var _this = this;
        this.service.deletePostService(post.id)
            .subscribe(function (response) {
            var index = _this.posts.indexOf(post);
            _this.posts.splice(index, 1);
        }, function (error) {
            if (error instanceof NotFoundError) {
                alert("This post already been deleted");
                console.log(error.originalError);
            }
            else
                throw error;
        });
    };
    PostServiceComponent = __decorate([
        Component({
            selector: 'app-post-service',
            templateUrl: './post-service.component.html',
            styleUrls: ['./post-service.component.css']
        }),
        __metadata("design:paramtypes", [PostService])
    ], PostServiceComponent);
    return PostServiceComponent;
}());
export { PostServiceComponent };
//# sourceMappingURL=post-service.component.js.map