import {Component, OnInit} from '@angular/core';
import {EventService} from '../event.service';
import {EventModel} from '../../model/event';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventList: EventModel[] = [];

  constructor(private eventService: EventService,
              private router: Router) {
  }

  ngOnInit() {
    this.loadAllEvents();
  }

  loadAllEvents() {
    this.eventService.getAll().subscribe((events: EventModel[]) => this.eventList = events);
  }

  loadEvent(id) {
    this.router.navigate(['events/', id]);
  }

}
