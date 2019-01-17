import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventItemComponent } from './event-item/event-item.component';
import {EventResolver} from './event.resolver';

const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'events/:id', component: EventItemComponent, resolve: {event: EventResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
