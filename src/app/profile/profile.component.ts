import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, userType } from '../Models/user';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {

  userT: string = "";
  user: User = new User();
  image : string = "";

  constructor(private service : ProfileService, private router : Router) { }

  ngOnInit(): void {
    let username = localStorage["username"];
    this.service.SpecifiedUrl="Profile/GetUserInfo";

    this.service.GetUserInfo(username).subscribe((data)=> {
      this.user = data;
      this.userT = userType[this.user.userT];
      if(this.user.image != null){
        if(this.user.username == "AdminJovan" || this.user.username == "Joja"){
          this.image = 'data:image/jpeg;base64,' + this.user.image;
        }else{

          this.image = this.user.image;
        }
      }
    },
    (error) => {
      console.log(error);
    } )
  }

}
