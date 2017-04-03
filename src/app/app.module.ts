import { UsersModule } from './users/users.module';
import { CounterModule } from './counter/counter.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { IAppState, APP_INITIAL_STATE, rootReducer } from './store';

import { AppComponent } from './app.component';
import { Auth } from "./auth/auth.service";
import { AUTH_PROVIDERS } from 'angular2-jwt';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    CounterModule,
    UsersModule
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
