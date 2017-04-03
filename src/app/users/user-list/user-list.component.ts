import { Subscription } from 'rxjs/Rx';
import { UserService } from '../user-service.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../store';
import { FETCH_USERS_FETCHING, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS } from '../actions';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'ngr-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  @Input() initialize: boolean;
  @Input() size: string = 'lg';
  @select((s: IAppState) => s.users.users) users;
  @select((s: IAppState) => s.users.loading) loading;
  @select((s: IAppState) => s.users.error) error;

  constructor(private ngRedux: NgRedux<IAppState>,
    private pUser: UserService) { }

  ngOnInit() {
    if (this.initialize !== false) {
      this.loadData();
    }
  }

  loadData() {
    this.ngRedux.dispatch({ type: FETCH_USERS_FETCHING });
    this.subscription = this.pUser.getUsers()
      .subscribe((data) => {
        this.ngRedux.dispatch({ type: FETCH_USERS_SUCCESS, users: data.json() });
      }, err => {
        this.ngRedux.dispatch({ type: FETCH_USERS_ERROR });
      });
  }

  reload() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.loadData();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }

}
