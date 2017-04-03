import { Component, OnInit } from '@angular/core';
import { Auth } from "../utility/auth/auth.service";

@Component({
  selector: 'ngr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: Auth, ) { }

  ngOnInit() {
  }

  login() {
    this.auth.login();
  }

}
