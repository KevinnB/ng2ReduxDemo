import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from "./user-list/user-list.component";
import { authGuard } from "../utility/auth/authGuard.guard";

export const usersRoutes: Routes = [
    {
        path: 'users',
        canActivate: [authGuard],
        canActivateChild: [authGuard],
        children: [
            {
                path: 'list',
                component: UserListComponent
            },
            {
                path: '',
                redirectTo: '/users/list',
                pathMatch: 'full'
            },
            {
                path: '**',
                redirectTo: '/error/page-not-found'
            },
        ]
    }
];