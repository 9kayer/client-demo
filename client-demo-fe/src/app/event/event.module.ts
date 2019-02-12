import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventListComponent} from './event-list/event-list.component';
import {EventItemComponent} from './event-item/event-item.component';
import {EventRoutingModule} from './event-routing.module';
import {SharedModule} from '../shared/shared.module';
import {EventDetailComponent} from './event-item/event-detail/event-detail.component';

@NgModule({
  declarations: [
    EventListComponent,
    EventItemComponent,
    EventDetailComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    SharedModule
  ],
  exports: [EventListComponent]
})
export class EventModule {
}
