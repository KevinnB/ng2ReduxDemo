import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from "./user-list/user-list.component";

export const usersRoutes: Routes = [
    {
        path: 'users',
        children: [
            {
                path: 'list',
                component: UserListComponent
            },
            {
                path: '**',
                redirectTo: '/error/page-not-found'
            },
        ]
    }
];