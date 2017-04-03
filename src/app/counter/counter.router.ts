import { RouterModule, Routes } from '@angular/router';

import { CounterComponent } from "./counter/counter.component";
import { authGuard } from "../utility/auth/authGuard.guard";

export const counterRoutes: Routes = [
    {
        path: 'counter',
        canActivate: [authGuard],
        canActivateChild: [authGuard],
        children: [
            {
                path: 'counter',
                component: CounterComponent
            },
            {
                path: '',
                redirectTo: '/counter/counter',
                pathMatch: 'full'
            },
            {
                path: '**',
                redirectTo: '/error/page-not-found'
            },
        ]
    }
];