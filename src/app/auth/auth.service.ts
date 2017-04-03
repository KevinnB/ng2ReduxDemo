// app/auth.service.ts

import { Injectable } from '@angular/core';

import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/filter';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
    // Configure Auth0
    userProfile: any = null;
    lock = new Auth0Lock('NWY5KfjyW8VdbbsgVMijKSbky6sawCKe', 'smileforward.auth0.com', {});

    constructor() {
        this.userProfile = JSON.parse(localStorage.getItem('profile'));

        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult) => {
            localStorage.setItem('id_token', authResult.idToken);

            this.lock.getProfile(authResult.idToken, (error, profile) => {
                if (error) console.error("Error getting profile.", error);

                localStorage.setItem('profile', JSON.stringify(profile));
                this.userProfile = profile;
            });
        });
    }

    public login() {
        // Call the show method to display the widget.
        this.lock.show();
    }

    public authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    }

    public logout() {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.userProfile = null;
    }
}