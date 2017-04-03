import { Component, OnDestroy } from '@angular/core';

import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './store';
import { Auth } from "./auth/auth.service";

@Component({
  selector: 'ngr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userProfile = null;

  constructor(private ngRedux: NgRedux<IAppState>,
    private auth: Auth) {
      console.log(auth);
    this.userProfile = auth.userProfile;
  }

}
