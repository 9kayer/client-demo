import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientItemComponent } from './client-item/client-item.component';

const routes: Routes = [  
  { path: 'clients',  component: ClientListComponent },
  { path: 'clients/:id', component: ClientItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
