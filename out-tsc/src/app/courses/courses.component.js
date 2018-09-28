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
import { CoursesSerive } from 'src/app/courses.service';
var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(service) {
        this.title = "List of Courses";
        this.pipedata = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla beatae porro exercitationem reprehenderit, at saepe, possimus nobis veniam molestiae perspiciatis ipsa accusamus qui dignissimos eum laudantium voluptatem vel quo ea.";
        this.courses = ["Course1", "Course2", "Course3"];
        this.email1 = "ladumor@yahoo.com";
        this.email2 = "alpo@yahoo.com";
        //let service=new CoursesSerive(); instead of creatig a instance of servies we can ask angulat to do it for us
        this.service_courses = service.getCourses();
    }
    CoursesComponent.prototype.getTitle = function () {
        return this.title;
    };
    CoursesComponent.prototype.onClick = function ($event) {
        console.log("Button was clicked.", $event);
    };
    CoursesComponent.prototype.pTagClicik = function ($event) {
        $event.stopPropagation();
        console.log("p tag cluicked");
    };
    CoursesComponent.prototype.divClicked = function () {
        console.log("Div clicked");
    };
    // onKeyup($event) {
    //   if($event.keyCode === 13)
    //   {
    //     console.log("Eneter key pressed");
    //   }
    // }
    CoursesComponent.prototype.onKeyup = function () {
        console.log("Eneter key pressed");
    };
    CoursesComponent.prototype.onKeyUptempateVariable = function (email) {
        console.log(email);
    };
    CoursesComponent.prototype.onkeyuptwoway = function () {
        console.log(this.email1);
    };
    CoursesComponent.prototype.onkeyuptwoway2 = function () {
        console.log(this.email2);
    };
    CoursesComponent.prototype.ngOnInit = function () {
    };
    CoursesComponent = __decorate([
        Component({
            selector: 'app-courses',
            templateUrl: './courses.component.html',
            styleUrls: ['./courses.component.css']
        }),
        __metadata("design:paramtypes", [CoursesSerive])
    ], CoursesComponent);
    return CoursesComponent;
}());
export { CoursesComponent };
//# sourceMappingURL=courses.component.js.map