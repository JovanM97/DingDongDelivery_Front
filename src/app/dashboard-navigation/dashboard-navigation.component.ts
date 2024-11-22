import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { User, userType } from '../Models/user';

@Component({
  selector: 'app-dashboard-navigation',
  templateUrl: './dashboard-navigation.component.html',
  styleUrls: ['./dashboard-navigation.component.css']
})
export class DashboardNavigationComponent implements OnInit {

  @Input() currentUser: User;
  public role : string;

  constructor( private router : Router, private socialAuthService: SocialAuthService) {
    if(localStorage["role"] != null){
      this.role = localStorage["role"]
    }
  }

  ngOnInit(): void {
    
  }

  checkType(): string {
    if (this.role != null){
      if(this.role == 'ADMIN')
      return 'ADMIN'
      else if(this.role == 'BUYER')
      return 'BUYER'
      else if(this.role == 'DELIVERYMAN' && this.currentUser.isActive == true)
        return 'DELIVERYMAN'
      else
      return 'NONE'
    } else {
      //return 'NONE'
      return 'BUYER'
    }
  }

  signOut(){
    localStorage.removeItem("nettoken");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem("email");

    this.router.navigate(['login'])

    this.socialAuthService.signOut();
  }

}
