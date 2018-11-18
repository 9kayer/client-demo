import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Client } from '../model/client';
import { Event } from '../model/event';

const eventList : Event[] = [
  new Event('1', 'Event name', new Date() ),
  new Event('2', 'Event name 2', new Date() )
];

const clientList : Client[] = [ 
  new Client('1', 'One','email@mail.com', '123456789', 'the super 1notes that I need', ' 1th, other street, Somecity', '54611', 'Somecountry', eventList),
  new Client('2', 'dois','email@mail.com', '123456789', 'the super 2notes that I need', ' 2th, other street, Somecity', '54611', 'Somecountry', eventList),
  new Client('3', 'trois','email@mail.com', '123456789', 'the super 3notes that I need', ' 3th, other street, Somecity', '54611', 'Somecountry', eventList),
];

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  constructor() { }
  
  get(id : string) : Observable<Client>{
    let client : Client = clientList.find(c => c.id === id);
    return of(client);
  }

  getAll() : Observable<Client[]> {
    return of(clientList);
}
}
