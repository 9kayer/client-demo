import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  public clientList: Client[] = [];

  constructor(
    private route : ActivatedRoute,
    private clientService : ClientService
  ) { }

  ngOnInit() {
    this.getAllClients();
  }

  getAllClients() : void {
    this.clientService.getAll()
          .subscribe( (clientList : Client[]) => this.clientList = clientList.sort( (a,b) => a.id <= b.id ? 0 : 1 ) );
  }

}
