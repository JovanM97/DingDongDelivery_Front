import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, FormBuilder, UntypedFormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { RegisterService } from '../Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  registerForm : UntypedFormGroup;
  url: any;
  minDate: Date = new Date (2010, 1, 1);

  constructor(private service : RegisterService, private router : Router,) { }

  ngOnInit(): void {
    this.setForm();
  }


  setForm(){
    this.registerForm = new UntypedFormGroup({
      username: new UntypedFormControl('', Validators.required),
      email: new UntypedFormControl('', Validators.required),
      password: new UntypedFormControl('', [Validators.required, Validators.minLength(7)]),
      password2: new UntypedFormControl('', [Validators.required, Validators.minLength(7)]),
      userT: new UntypedFormControl('', Validators.required),
      firstName: new UntypedFormControl('', Validators.required),
      lastName: new UntypedFormControl('', Validators.required),
      dateOfBirth: new UntypedFormControl('', Validators.required),
      address: new UntypedFormControl('', Validators.required),
      image : new UntypedFormControl('', Validators.required),
    }, { validators: this.checkPasswords })
  }

  onSubmit() { 
    if(this.registerForm.value.password != this.registerForm.value.password2){
      alert("Passwords must match!")
    }
     else if(this.registerForm.value.image == "" || this.registerForm.value.image == null){
      alert("Please choose a profile picture!")
    }
      else if(this.registerForm.value.password == "" || this.registerForm.value.password2 == "" || this.registerForm.value.username == "" || this.registerForm.value.firstName == "" ||
            this.registerForm.value.lastName == "" || this.registerForm.value.dateOfBirth == null || this.registerForm.value.dateOfBirth == "" || this.registerForm.value.address == "" ||
            this.registerForm.value.email == "")
    {
      alert("Please fill all the field")
    }
     else {

    
      let user = new User();
      user.username = this.registerForm.value.username;
      user.email = this.registerForm.value.email;
      user.password = this.registerForm.value.password;
      user.userT = this.registerForm.value.userT;
      user.firstName = this.registerForm.value.firstName;
      user.lastName = this.registerForm.value.lastName;
      user.dateOfBirth = this.registerForm.value.dateOfBirth;
      user.address = this.registerForm.value.address;
      user.image = this.registerForm.value.image;

      this.service.SpecifiedUrl="Register/Register";

      this.service.Register(user).subscribe((data) => { 
          
        alert("You have successfully registered. Wait for an Admin to review it.")
        //console.log(data.firstLoggin);
        this.router.navigate(['login'])
      },
      (error) => {
        console.log(error);
        alert(error.msg);
      },
      () => {
        console.log('complete');
      })
    }
  }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password').value;
    let confirmPass = group.get('password2').value
    return pass === confirmPass ? null : { notSame: true }
  }


  onFileChanged(event) {
    const files = event.target.files;

    const reader = new FileReader();
    let imagePath = files;
    console.log(imagePath);
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
        this.url = reader.result; 
    }
    console.log(this.url);
    this.registerForm.value.image = this.url;
    
  }
}
