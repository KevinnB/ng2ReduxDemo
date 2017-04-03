import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from "ng2-redux/lib";
import { IAppState } from "../store";

@Component({
  selector: 'ngr-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @select((s: IAppState) => s.auth.localProfile) userProfile;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

}
