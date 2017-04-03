import { Component, OnInit } from '@angular/core';
import { Auth } from "../utility/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'ngr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: Auth,
    private router: Router) { }

  ngOnInit() {
    console.log(this.auth.authenticated());
    if (this.auth.authenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  login() {
    this.auth.login();
  }

}
