import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngr-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit {
  @Input() loading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
