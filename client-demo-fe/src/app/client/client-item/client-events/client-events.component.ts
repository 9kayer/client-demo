import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-client-events',
  templateUrl: './client-events.component.html',
  styleUrls: ['./client-events.component.css']
})
export class ClientEventsComponent implements OnInit {

  @Input() events;

  constructor() {
  }

  ngOnInit() {
  }

}
