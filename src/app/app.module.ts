import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { IAppState, INITIAL_STATE, rootReducer } from './store'; 

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(ngRedux: NgRedux<IAppState>,
    devtools: DevToolsExtension) { 
      var enhancer = isDevMode() ? [devtools.enhancer()] : [];

      ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancer);
  }
}
