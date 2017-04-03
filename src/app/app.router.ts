import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./profile/profile.component";
import { authGuard, unAuthGuard } from "./utility/auth/authGuard.guard";
import { LoginComponent } from "app/login/login.component";

export const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [authGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [unAuthGuard]
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/error/page-not-found'
    }
];