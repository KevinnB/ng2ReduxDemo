// app/auth.service.ts
import { Injectable } from '@angular/core';

import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/filter';
import { NgRedux } from "ng2-redux/lib";
import { IAppState } from "app/store";

import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_ERROR, LOGOUT_SUCCESS, ATTEMPTING_LOGIN, ATTEMPTING_LOGOUT, VALIDATE_TOKEN, VALIDATE_TOKEN_ERROR, VALIDATE_TOKEN_SUCCESS } from './actions';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
    // Configure Auth0
    lock = new Auth0Lock('NWY5KfjyW8VdbbsgVMijKSbky6sawCKe', 'smileforward.auth0.com', {});

    constructor(private ngRedux: NgRedux<IAppState>) {
        if (localStorage.getItem('profile')) {
            this.ngRedux.dispatch({ type: LOGIN_SUCCESS, profile: JSON.parse(localStorage.getItem('profile')) });
        }

        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult) => {
            localStorage.setItem('id_token', authResult.idToken);

            this.lock.getProfile(authResult.idToken, (error, profile) => {
                if (error) {
                    this.ngRedux.dispatch({ type: LOGIN_ERROR, error: error });
                    return;
                }

                localStorage.setItem('profile', JSON.stringify(profile));
                this.ngRedux.dispatch({ type: LOGIN_SUCCESS, profile: JSON.parse(localStorage.getItem('profile')) });
            });
        });
    }

    public login() {
        // Call the show method to display the widget.
        this.lock.show();
    }

    public authenticated() {
        var auth = tokenNotExpired();
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        if (!auth) {
            this.ngRedux.dispatch({ type: VALIDATE_TOKEN_ERROR });
            
        }

        return auth;
    }

    public logout() {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.ngRedux.dispatch({ type: LOGOUT_SUCCESS });
    }
}