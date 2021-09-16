import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User;
  msg = '';

  successMessage:string =""

  regForm!:FormGroup


  constructor(private registrationService:RegistrationService,private router:Router,private authService:AuthenticationService,private fb: FormBuilder) { 
    if (this.authService.currentUserValue) { 
      this.router.navigate(['/']);
  }
  }

  ngOnInit(): void {

    this.regForm = this.fb.group({
      name: ['',[Validators.required]],
      mobileNumber: ['',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]],
      email:['',[Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
      password: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]]
    })
  }



  loginUser()
  {
    this.authService.login(this.user.emailId,this.user.password).subscribe(
      data => {
        console.log("response recieved");
        this.router.navigate(['loginsuccess']);
      },
      error =>{
        console.log("exception occured");
        this.msg = "Bad , Please Enter valid email id and password";
      } 
    );
  }
  goHome() {
    this.router.navigate(['/loginsuccess']);
  }

  gotoRegistrationPage()
  {
    this.router.navigate(['/loginsuccess']);
    console.log("hello Govnd");
  }

  signUp() {
    const container= document.getElementById('container');
    container!.classList.add('right-panel-active');
    localStorage.removeItem('currentUser');
}
signIn() {
  const container = document.getElementById('container');
  container!.classList.remove('right-panel-active');
  localStorage.removeItem('currentUser');
}


register()
  {
    this.successMessage = "Successfully Registered..."
    // console.log(this.regForm)
  }


}
