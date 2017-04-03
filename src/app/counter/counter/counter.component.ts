import { Component, OnInit } from '@angular/core';

import { INCREMENT, DECREMENT, RESET } from '../actions';
import { select, NgRedux } from "ng2-redux/lib";
import { IAppState } from "../../store";

@Component({
  selector: 'ngr-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @select((s: IAppState) => s.counter.count) count;
  @select((s: IAppState) => s.counter.lastUpdate) lastUpdated;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }


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
