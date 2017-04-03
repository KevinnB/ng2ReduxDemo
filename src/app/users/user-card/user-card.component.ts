import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngr-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: any;
  @Input() size: string = 'lg';

  constructor() { }

  ngOnInit() {
  }
}
