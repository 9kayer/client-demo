import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {Client} from '../../model/client';
import {EventModel} from '../../model/event';

const eventList: EventModel[] = [
  new EventModel('1', 'EventModel name', new Date(), new Date(), 'Lisbon', 'Portugal', 'Lisbon', 'IDK'),
  new EventModel('2', 'EventModel name 2', new Date(), new Date(), 'Lisbon', 'Portugal', 'Lisbon', 'IDK')
];

const clientList: Client[] = [
  new Client('1', 'One', 'email@mail.com', '123456789', 'the super 1notes that I need', ' 1th, other street, Somecity', '54611', 'Somecountry', eventList),
  new Client('2', 'dois', 'email@mail.com', '123456789', 'the super 2notes that I need', ' 2th, other street, Somecity', '54611', 'Somecountry', eventList),
  new Client('3', 'trois', 'email@mail.com', '123456789', 'the super 3notes that I need', ' 3th, other street, Somecity', '54611', 'Somecountry', eventList),
];

@Injectable({
  providedIn: 'root'
})

export class MockClientService {

  constructor() {
  }

  get(id: string): Observable<Client> {
    const client: Client = clientList.find(c => c.id === id);
    return of(client);
  }

  getAll(): Observable<Client[]> {
    return of(clientList);
  }
}
