import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { errorRoutes } from "./error.router";
import { UtilityModule } from "../utility/utility.module";


@NgModule({
  imports: [
    RouterModule.forRoot(errorRoutes),
    CommonModule,
    UtilityModule
  ],
  declarations: [
    PageNotFoundComponent
  ]
})
export class ErrorModule { }
