import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { VerificationService } from '../Services/verification.service';

@Component({
  selector: 'app-verifications-page',
  templateUrl: './verifications-page.component.html',
  styleUrls: ['./verifications-page.component.css'],
  providers: [VerificationService]
})
export class VerificationsPageComponent implements OnInit {

  users: Array<User>;

  constructor(private service : VerificationService, private router : Router,) { }

  ngOnInit(): void {
    this.service.SpecifiedUrl="Verification/GetAllUsers";

    this.service.GetAllUsers().subscribe((data) => {

      this.users = data;

    })
  }

}
