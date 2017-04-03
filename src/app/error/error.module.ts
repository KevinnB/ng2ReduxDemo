import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { errorRoutes } from "./error.router";

@NgModule({
  imports: [
    RouterModule.forRoot(errorRoutes),
    CommonModule
  ],
  declarations: [
    PageNotFoundComponent
  ]
})
export class ErrorModule { }
