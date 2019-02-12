import {Component, Input, OnInit} from '@angular/core';
import {EventService} from '../event.service';
import {EventModel} from '../../model/event';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  @Input() events;
  clientMode;
  eventList: EventModel[] = [];

  constructor(private eventService: EventService,
              private router: Router) {
  }

  ngOnInit() {
    this.clientMode = this.events != null;
    this.loadAllEvents();
  }

  loadAllEvents() {
    this.clientMode ? this.eventList = this.events : this.eventService.getAll().subscribe((events: EventModel[]) => this.eventList = events);
  }

  loadEvent(id) {
    this.router.navigate(['events/', id]);
  }

}
