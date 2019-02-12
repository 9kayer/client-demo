import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EventListComponent} from './event-list/event-list.component';
import {EventItemComponent} from './event-item/event-item.component';
import {EventDetailComponent} from './event-item/event-detail/event-detail.component';

const routes: Routes = [
  {path: 'events', component: EventListComponent},
  {path: 'events/:id', component: EventItemComponent},
  {path: 'events/new', component: EventDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule {
}
