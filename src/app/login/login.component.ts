import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginModel } from '../Models/loginModel';
import { LoginService } from '../Services/login.service';

import {
  SocialAuthService,
  FacebookLoginProvider,
  SocialUser,
} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loginForm: UntypedFormGroup;
  socialUser!: SocialUser;
  returnUrl;
  constructor(private service : LoginService, private router : Router, private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    if(localStorage["username"] != null)
    this.router.navigate(['dashboard'])

    this.setForm();

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
    });
  }

  setForm(){
    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl('', Validators.required),
      password: new UntypedFormControl('', [Validators.required, Validators.minLength(7)])
  
    })
  }

  onSubmit() {
    let user = new LoginModel(this.loginForm.value.email, this.loginForm.value.password)
    this.service.SpecifiedUrl="Login/Login";

    this.service.Login(user).subscribe((data) => { 
        
      localStorage.setItem("nettoken",data.token);
      localStorage.setItem("role",data.msg);
      localStorage.setItem("username",data.username);
      localStorage.setItem("email",user.email);
      //console.log(data.firstLoggin);
       this.router.navigate(['dashboard'])
       this.service.checkTheRole();
     },
     (error) => {
       console.log(error);
       alert("Email or password incorrect.")
     },
     () => {
       console.log('complete');
    })
  }

  loginWithFacebook(): void {
    this.service.SpecifiedUrl="Login/SocialLogin";

    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(socialusers => {
      console.log(socialusers);
      this.service.socialLogin(socialusers).subscribe(
        (data:any) => {
          localStorage.setItem('nettoken', data.token);
          localStorage.setItem("role",data.msg);
          localStorage.setItem("username",data.username);
          this.router.navigate(['dashboard']);
        }
      )
    }

    );
  }
  
}
