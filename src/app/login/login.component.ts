import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../_service/authentication-service.service';
import { loginsModel } from './loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginModel: loginsModel;
  constructor(private router: Router,
    private authenticationService: AuthenticationServiceService) { }

  ngOnInit(): void {
    this.userLoginModel = new loginsModel;
    sessionStorage.clear()
  }

  login() {

    const body = {
      "email": this.userLoginModel.email,
      "password": this.userLoginModel.password
    };
    console.log(body)
    this.authenticationService.login(body).subscribe((data: any) => {
      if (data) {
        sessionStorage.setItem('token', data.headers.get('x-access-token'))
        this.router.navigate(['/order']);
      }
    })
  }
}