import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup } from '@angular/forms';
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
  constructor(private registrationService:RegistrationService,private router:Router,private authService:AuthenticationService) { 
    if (this.authService.currentUserValue) { 
      this.router.navigate(['/']);
  }
  }

  ngOnInit(): void {
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

}
