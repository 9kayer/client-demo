import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../event.service';
import {EventModel} from '../../model/event';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  eventForm: FormGroup;
  event: EventModel;
  editMode = false;

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
      'startDate': new FormControl(null),
      'endDate': new FormControl(null),
      'location': new FormControl(null),
      'city': new FormControl(null),
      'country': new FormControl(null),
      'field': new FormControl(null)
    });

    if (this.editMode) {
      this.eventForm.patchValue(this.event);
    }
  }

  onSubmit() {
    const updateEvent = this.eventForm.getRawValue();

    this.eventService.update(this.event.id, updateEvent).subscribe(event => console.log(event));

  }

}
