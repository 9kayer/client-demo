import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';
import { Client } from 'src/app/model/client';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.css']
})
export class ClientItemComponent implements OnInit {

  client : Client;

  constructor(
    private route : ActivatedRoute,
    private clientService : ClientService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        let id:string = params['id'];
        this.clientService.get(id)
          .subscribe((client : Client) =>{
            this.client = client;
          })
      });
  }

}
