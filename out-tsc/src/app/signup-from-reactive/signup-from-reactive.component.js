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
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from 'src/app/signup-from-reactive/username.validators';
var SignupFromReactiveComponent = /** @class */ (function () {
    function SignupFromReactiveComponent() {
        this.form = new FormGroup({
            account: new FormGroup({
                username: new FormControl('', [
                    Validators.required,
                    Validators.minLength(3),
                    UsernameValidators.cannotContainSpace,
                ], UsernameValidators.shouldBeUnique),
                password: new FormControl('', Validators.required)
            })
        });
    }
    Object.defineProperty(SignupFromReactiveComponent.prototype, "passwordValidate", {
        // get passwordValidate() {
        //   return this.form.get('password')
        // }
        // get username() {
        //   return this.form.get('username');
        // }
        get: function () {
            return this.form.get('account.password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupFromReactiveComponent.prototype, "username", {
        get: function () {
            return this.form.get('account.username');
        },
        enumerable: true,
        configurable: true
    });
    SignupFromReactiveComponent.prototype.loginMethod = function () {
        this.form.setErrors({
            invalidLogin: true,
        });
        // let isValid = authService.login(this.form.value);
        // if(!isValid)
        // {
        //   this.form.setErrors({
        //     invalidLogin: true,
        //   })
        // }
    };
    SignupFromReactiveComponent.prototype.ngOnInit = function () {
    };
    SignupFromReactiveComponent = __decorate([
        Component({
            selector: 'app-signup-from-reactive',
            templateUrl: './signup-from-reactive.component.html',
            styleUrls: ['./signup-from-reactive.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], SignupFromReactiveComponent);
    return SignupFromReactiveComponent;
}());
export { SignupFromReactiveComponent };
//# sourceMappingURL=signup-from-reactive.component.js.map