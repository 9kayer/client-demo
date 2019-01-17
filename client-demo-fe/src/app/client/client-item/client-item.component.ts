import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Client} from 'src/app/model/client';
import {ClientService} from '../service/client.service';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.css']
})
export class ClientItemComponent implements OnInit {

  client: Client;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService
  ) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        const id: string = params['id'];
        this.getClient(id);
      });
  }

  getClient(id: string) {
    this.clientService.get(id)
      .subscribe((client: Client) => {
        this.client = client;
      });
  }

}
