import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from 'src/app/signup-from-reactive/username.validators';

@Component({
  selector: 'app-signup-from-reactive',
  templateUrl: './signup-from-reactive.component.html',
  styleUrls: ['./signup-from-reactive.component.css']
})
export class SignupFromReactiveComponent implements OnInit {

  form = new FormGroup({

    account: new FormGroup({
      username:new FormControl('', 
                                [
                                    Validators.required,
                                    Validators.minLength(3),
                                    UsernameValidators.cannotContainSpace,
                                ],
                              //UsernameValidators.shouldBeUnique  //commented because of eror
                            ),

    password:new FormControl('', Validators.required) 
    })

    
  });

  // get passwordValidate() {
  //   return this.form.get('password')
  // }
  // get username() {
  //   return this.form.get('username');
  // }

  get passwordValidate() {
    return this.form.get('account.password')
  }
  get username() {
    return this.form.get('account.username');
  }

  loginMethod() {

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
  }
  constructor() { }

  ngOnInit() {
  }

}
