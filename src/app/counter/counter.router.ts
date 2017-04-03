import { RouterModule, Routes } from '@angular/router';

import { CounterComponent } from "./counter/counter.component";

export const counterRoutes: Routes = [
    {
        path: 'counter',
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