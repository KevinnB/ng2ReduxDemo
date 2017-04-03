import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CounterComponent } from './counter/counter.component';
import { counterRoutes } from "./counter.router";
import { UtilityModule } from "../utility/utility.module";

@NgModule({
  imports: [
    RouterModule.forRoot(counterRoutes),
    CommonModule,
    UtilityModule
  ],
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ],
})
export class CounterModule { }
