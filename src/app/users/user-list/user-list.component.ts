import { Subscription } from 'rxjs/Rx';
import { UserService } from '../user-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../store';
import { FETCH_USERS_FETCHING, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS } from '../actions';

@Component({
  selector: 'ngr-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  @select((s: IAppState) => s.users.users) users;
  @select((s: IAppState) => s.users.loading) loading;
  @select((s: IAppState) => s.users.error) error;

  constructor(private ngRedux: NgRedux<IAppState>,
    private pUser: UserService) { }

  ngOnInit() {
    this.ngRedux.dispatch({ type: FETCH_USERS_FETCHING });
    this.subscription = this.pUser.getUsers()
      .subscribe((data) => {
        this.ngRedux.dispatch({ type: FETCH_USERS_SUCCESS, users: data.json() });
      }, err => {
        this.ngRedux.dispatch({ type: FETCH_USERS_ERROR });
      });
  }

  reload() {
    this.subscription.unsubscribe();
    this.ngOnInit();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
