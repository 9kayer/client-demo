import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {Client} from 'src/app/model/client';
import {ClientService} from '../service/client.service';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.scss']
})
export class ClientItemComponent implements OnInit {


  clientId;
  clientCompanies;
  editMode = false;
  client: Client;

  constructor(private route: ActivatedRoute,
              private clientService: ClientService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.clientId = params['id'];
      this.editMode = params['id'] !== 'new';
      this.initClient();
    });
  }

  initClient() {
    this.editMode ? this.clientService.get(this.clientId).subscribe(client => this.client = client) : this.client = null;
  }

}
