import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User;
  msg = '';
  constructor(private _service:RegistrationService,private _rout:Router) { }

  ngOnInit(): void {
  }

  loginUser()
  {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
      },
      error =>{
        console.log("exception occured");
        this.msg = "Bad , Please Enter valid email id and password";
      } 
    );
  }

  gotoRegistrationPage()
  {
    this._rout.navigate(['/registeration']);
    console.log("hello Govnd");
  }

}
