import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, userType } from '../Models/user';
import { ProfileEditService } from '../Services/profile-edit.service';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
  providers: [ProfileEditService]
})
export class ProfileEditComponent implements OnInit {

  userT: string = "";
  user: User = new User();
  image : string = "";
  userDate : string;
  editForm : UntypedFormGroup;
  pipe = new DatePipe('en-US');

  constructor(private service : ProfileEditService, private router : Router) {
    this.setForm();
   }

   setForm(){
    this.editForm = new UntypedFormGroup({
      username: new UntypedFormControl('', Validators.required),
      password: new UntypedFormControl('', [Validators.required, Validators.minLength(7)]),
      password2: new UntypedFormControl('', [Validators.required, Validators.minLength(7)]),
      firstName: new UntypedFormControl('', Validators.required),
      lastName: new UntypedFormControl('', Validators.required),
      dateOfBirth: new UntypedFormControl('', Validators.required),
      address: new UntypedFormControl('', Validators.required),
    }, { validators: this.checkPasswords })
  }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password').value;
    let confirmPass = group.get('password2').value
    return pass === confirmPass ? null : { notSame: true }
  }

  ngOnInit(): void {
    let username = localStorage["username"];
    this.service.SpecifiedUrl="ProfileEdit/GetUserInfo";

    this.service.GetUserInfo(username).subscribe((data)=> {
      this.user = data;
      this.userT = userType[this.user.userT];
      this.userDate = this.pipe.transform(data.dateOfBirth, 'YYYY-MM-dd');
      if(this.user.image != null){
        if(this.user.username == "AdminJovan" || this.user.username == "Joja"){
          this.image = 'data:image/jpeg;base64,' + this.user.image;
        }else{

          this.image = this.user.image;
        }
      }

      this.editForm.value.username = this.user.username;
      this.editForm.value.firstName = this.user.firstName;
      this.editForm.value.lastName = this.user.lastName;
      this.editForm.value.address = this.user.address;
      this.editForm.value.dateOfBirth = this.userDate;
    },
    (error) => {
      console.log(error);
    } )
  }


  onSubmit() {
    if(this.editForm.value.password != this.editForm.value.password2){
      alert("Passwords must match!")
    } else if(this.editForm.value.password == "" || this.editForm.value.password2 == "" || this.editForm.value.username == "" || this.editForm.value.firstName == "" ||
            this.editForm.value.lastName == ""  || this.editForm.value.dateOfBirth == null || this.editForm.value.dateOfBirth == "" || this.editForm.value.address == "")
            {
              alert("Please fill all the field");
              console.log(this.editForm.value.dateOfBirth)
    }
    else{
      let u = new User();
      u = this.user;
      u.username = this.editForm.value.username;
      u.password = this.editForm.value.password;
      u.firstName = this.editForm.value.firstName;
      u.lastName = this.editForm.value.lastName;
      u.dateOfBirth = this.editForm.value.dateOfBirth;
      u.address = this.editForm.value.address;
      
      this.service.SpecifiedUrl="ProfileEdit/SaveUserInfo";

      this.service.SaveUserInfo(u.userId, u).subscribe((data)=> {
          if(data == "Username"){
            alert("Username already taken");
          } else {
            alert("Editing successfull")
            this.router.navigate(['profile'])
          }
      },
      (error)=>{
        alert("Username already taken");
      })

      
    }
  }

}
