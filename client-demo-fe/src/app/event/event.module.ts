import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventListComponent} from './event-list/event-list.component';
import {EventItemComponent} from './event-item/event-item.component';
import {EventRoutingModule} from './event-routing.module';
import {OwlDateTimeModule} from "ng-pick-datetime";
import {OwlMomentDateTimeModule} from "ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    EventListComponent,
    EventItemComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlMomentDateTimeModule,
  ]
})
export class EventModule {
}
