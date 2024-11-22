import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, userType } from '../Models/user';
import { VerificationService } from '../Services/verification.service';

@Component({
  selector: 'app-verification-user',
  templateUrl: './verification-user.component.html',
  styleUrls: ['./verification-user.component.css'],
  providers: [VerificationService]
})
export class VerificationUserComponent implements OnInit {

  @Input() user: User;
  userT : string;
  userStatus : string;

  constructor(private service : VerificationService, private router : Router) { }

  ngOnInit(): void {
    this.userT = userType[this.user.userT];
    if(this.user.isActive)
      this.userStatus ="ACTIVE"
    else
      this.userStatus ="NOT ACTIVE"
  }


  accept(){
    this.service.SpecifiedUrl="Verification/AcceptUser";

    this.service.AcceptUser(this.user.userId).subscribe((data) => {
      console.log(data);
      if(data == "Success"){
        alert("User accepted successfully")
      } else if(data == "Deleted"){
        alert("User rejected by other admin")
      } else if(data == "Approved"){
        alert("User already approved by other admin")
      }
      location.reload();
    }, (error) => {
      console.log(error);
      location.reload();
    })
  }

  reject(){
    this.service.SpecifiedUrl="Verification/RejectUser";

    this.service.RejectUser(this.user.userId).subscribe((data) => {

      if(data == "Success"){
        alert("User rejected successfully")
      } else if(data == "Deleted"){
        alert("User already rejected by other admin")
      } else if(data == "Approved"){
        alert("User approved by other admin")
      }
      location.reload();
    })
  }

}
