//import { AuthHttp, AUTH_PROVIDERS, provideAuth, AuthConfig } from 'angular2-jwt/angular2-jwt';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule,Http, BaseRequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

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
import { ErrorHandler } from '@angular/core';
import { AppErrorhandler } from 'src/app/common/app-error-handler';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { RouteAppComponent } from './route-app/route-app.component';
import { GithubFollowersService } from 'src/app/services/github-followers.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { OrderService } from 'src/app/services/order.service';
import { AuthService } from 'src/app/services/auth.service';
import { fakeBackendProvider } from 'src/app/helpers/fake-backend';
import { MockBackend } from '@angular/http/testing';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { AdminAuthGuardService } from 'src/app/services/admin-auth-guard.service';
import { environment } from '../environments/environment';
import { FirebaseDemoComponent } from './firebase-demo/firebase-demo.component';


@NgModule({
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
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    GithubFollowersComponent,
    RouteAppComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    NoAccessComponent,
    FirebaseDemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path:'followers/:userid/:username', component: GithubProfileComponent},
      {path: 'followers', component: GithubFollowersComponent},
      {path: 'posts', component: PostServiceComponent},
      
      {path: 'authentication', component:HomeComponent},
      {path: 'admin', component:AdminComponent, canActivate: [AuthGuardService, AdminAuthGuardService]},
      {path: 'login', component:LoginComponent},
      {path: 'no-access', component:NoAccessComponent},
      {path: 'firebase-demo', component:FirebaseDemoComponent},
      {path: '**', component:NotFoundComponent},
    ]),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,

  ],
  providers: [
    CoursesSerive,
    PostService,
    { provide: ErrorHandler,useClass: AppErrorhandler },
    GithubFollowersService,

    OrderService,
    AuthService,
    // For creating a mock back-end. You don't need these in a real app. 
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
    AuthGuardService,
    AdminAuthGuardService
  ],
  //bootstrap: [AppComponent]
  bootstrap: [RouteAppComponent]
})
export class AppModule { }
