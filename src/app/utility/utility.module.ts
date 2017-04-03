import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Auth } from "./auth/auth.service";
import { authGuard, unAuthGuard } from "./auth/authGuard.guard";
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingIndicatorComponent
  ],
  exports: [
    LoadingIndicatorComponent,
  ],
  providers: [Auth, authGuard, unAuthGuard, AUTH_PROVIDERS]
})
export class UtilityModule { }
