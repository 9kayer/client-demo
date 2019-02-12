import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {Client} from '../../model/client';
import {EventModel} from '../../model/event';

const eventList: EventModel[] = [
  new EventModel('1', 'EventModel name', new Date(), new Date(), 'Lisbon', 'Portugal', 'Lisbon', 'IDK'),
  new EventModel('2', 'EventModel name 2', new Date(), new Date(), 'Lisbon', 'Portugal', 'Lisbon', 'IDK')
];

const clientList: Client[] = [
  new Client('One', 'email@mail.com', 123456789, 'the super 1notes that I need', ' 1th, other street, Somecity', 'city', 54611, 'Somecountry', 'province', 123456789),
  new Client('dois', 'email@mail.com', 123456789, 'the super 2notes that I need', ' 2th, other street, Somecity', 'city', 54611, 'Somecountry', 'province', 123456789),
  new Client('trois', 'email@mail.com', 123456789, 'the super 3notes that I need', ' 3th, other street, Somecity', 'city', 54611, 'Somecountry', 'province', 123456789),
];

@Injectable({
  providedIn: 'root'
})

export class MockClientService {

  constructor() {
  }

  getAll(): Observable<Client[]> {
    return of(clientList);
  }
}
