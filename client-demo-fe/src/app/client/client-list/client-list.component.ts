import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  public clientList: Client[] = [ 
    new Client('1', 'One'),
    new Client('2', 'dois'),
    new Client('3', 'trois'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
