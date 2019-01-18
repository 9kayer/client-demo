import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientRoutingModule} from './client-routing.module';
import {ClientItemComponent} from './client-item/client-item.component';
import {ClientListComponent} from './client-list/client-list.component';
import {SharedModule} from '../shared/shared.module';
import { ClientDetailComponent } from './client-item/client-detail/client-detail.component';
import { ClientEventsComponent } from './client-item/client-events/client-events.component';
import { ClientCompaniesComponent } from './client-item/client-companies/client-companies.component';

@NgModule({
  declarations: [
    ClientItemComponent,
    ClientListComponent,
    ClientDetailComponent,
    ClientEventsComponent,
    ClientCompaniesComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule {
}
