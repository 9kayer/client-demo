import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../event.service';
import {EventModel} from '../../model/event';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

  eventForm: FormGroup;
  event: EventModel;
  editMode = false;

  startDate = new Date();
  endDate = new Date();

  constructor(private route: ActivatedRoute,
              private eventService: EventService) {
  }

  ngOnInit() {
    this.getEvent();
  }

  getEvent() {
    this.route.params.subscribe(param => this.eventService.getEvent(param['id']).subscribe((event: EventModel) => {
      this.event = event;
      this.editMode = true;
      this.initForm();
    }));
  }

  initForm() {
    this.eventForm = new FormGroup({
      'id': new FormControl(),
      'name': new FormControl(null),
      'startDate': new FormControl(this.startDate),
      'endDate': new FormControl(this.endDate),
      'location': new FormControl(null),
      'city': new FormControl(null),
      'country': new FormControl(null),
      'field': new FormControl(null)
    });

    if (this.editMode) {
      this.eventForm.patchValue(this.event);
      this.startDate = new Date(this.event.startDate * 1000);
      this.endDate = new Date(this.event.endDate * 1000);
    }
  }

  onSubmit() {
    const updateEvent = this.eventForm.getRawValue();

    this.eventService.update(this.event.id, updateEvent).subscribe(event => console.log(event));

  }

}
