import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-dashboard-screen',
  templateUrl: './dashboard-screen.component.html',
  styleUrls: ['./dashboard-screen.component.css'],
  providers: [ProfileService]
})
export class DashboardScreenComponent implements OnInit {

  public username : string;
  user: User;

  constructor(private service : ProfileService, private router : Router) {
    if(localStorage["role"] != null){
      this.username = localStorage["username"]
    }
   }

  ngOnInit(): void {
    let username = localStorage["username"];
    this.service.SpecifiedUrl="Profile/GetUserInfo";

    this.service.GetUserInfo(username).subscribe((data)=> {
      this.user = data;

    },
    (error) => {
      console.log(error);
    } )
  }

}
