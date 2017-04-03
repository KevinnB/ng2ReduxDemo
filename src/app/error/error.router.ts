import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

export const errorRoutes: Routes = [
    {
        path: 'error',
        children: [
            {
                path: 'page-not-found',
                component: PageNotFoundComponent
            },
            {
                path: '**',
                redirectTo: '/error/page-not-found'
            },
        ]
    }
];