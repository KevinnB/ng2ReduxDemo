import { Injectable } from "@angular/core";
import { Router, CanActivate, CanActivateChild } from "@angular/router";

import { Auth } from "./auth.service";

@Injectable()
export class authGuard implements CanActivate, CanActivateChild {
    constructor(private authService: Auth, private router: Router) { }

    canActivate() {
        return this.validateLogin();
    }

    canActivateChild() {
        return this.validateLogin();
    }

    validateLogin() {
        if (this.authService.authenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
        return false;
    }
}

@Injectable()
export class unAuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: Auth, private router: Router) { }

    canActivate() {
        return this.validateLogin();
    }

    canActivateChild() {
        return this.validateLogin();
    }

    validateLogin() {
        if (this.authService.authenticated()) {
            this.router.navigate(['/dashboard']);
            return false;
        }
        else {
            return true;
        }
    }
}
