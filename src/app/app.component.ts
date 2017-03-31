import { Component, OnDestroy } from '@angular/core';

import { NgRedux, select } from 'ng2-redux'; 
import { IAppState } from './store';
import { INCREMENT } from './actions';

@Component({
  selector: 'ngr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngr works!';
  @select('counter') count;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  increment() {

    this.ngRedux.dispatch({ type: 'INCREMENT' });
  }
}
