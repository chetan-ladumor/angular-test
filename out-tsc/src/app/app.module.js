var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesSerive } from 'src/app/courses.service';
import { SummaryPipe } from 'src/app/summary.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ChildSecondComponent } from './child-second/child-second.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFromReactiveComponent } from './signup-from-reactive/signup-from-reactive.component';
import { PostServiceComponent } from './post-service/post-service.component';
import { PostService } from 'src/app/services/post.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                CoursesComponent,
                SummaryPipe,
                ParentComponent,
                ChildComponent,
                ChildSecondComponent,
                InputFormatDirective,
                ContactFormComponent,
                SignupFromReactiveComponent,
                PostServiceComponent,
            ],
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                HttpModule,
            ],
            providers: [
                CoursesSerive,
                PostService,
                { provide: ErrorHandler, useClass: AppErrorhandler }
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map