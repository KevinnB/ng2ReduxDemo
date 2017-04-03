import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";

import { Auth } from "./auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: Auth, private router: Router) { }

    canActivate() {
        if (this.authService.authenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
        return false;
    }
}