import { Component, OnDestroy } from '@angular/core';

import { NgRedux, select } from 'ng2-redux'; 
import { IAppState } from './store';
import { INCREMENT, DECREMENT, RESET } from './counter/actions';

@Component({
  selector: 'ngr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngr works!';
  @select((s: IAppState) => s.counter.count) count;
  @select((s: IAppState) => s.counter.lastUpdate) lastUpdated;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.ngRedux.dispatch({ type: DECREMENT });
  }

  reset() {
    this.ngRedux.dispatch({ type: RESET });
  }
}
