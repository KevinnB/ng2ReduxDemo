import { UsersModule } from './users/users.module';
import { CounterModule } from './counter/counter.module';
import { ErrorModule } from './error/error.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.router';

import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { IAppState, APP_INITIAL_STATE, rootReducer } from './store';

import { BsDropdownModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { Auth } from "./auth/auth.service";
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    CounterModule,
    UsersModule,
    ErrorModule
  ],
  providers: [Auth, AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {

  // This is type any because of some ts bug... #annoyed.
  constructor(ngRedux: NgRedux<any>,
    devtools: DevToolsExtension) {
    var enhancer = isDevMode() ? [devtools.enhancer()] : [];

    ngRedux.configureStore(rootReducer, APP_INITIAL_STATE, [], enhancer);
  }
}
