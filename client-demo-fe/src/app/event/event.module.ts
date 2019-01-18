import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventListComponent} from './event-list/event-list.component';
import {EventItemComponent} from './event-item/event-item.component';
import {EventRoutingModule} from './event-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    EventListComponent,
    EventItemComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    SharedModule
  ]
})
export class EventModule {
}
