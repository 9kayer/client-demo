import {EventModel} from './event';

export class Client {

  id: number;
  name: string;
  clientType: any[] = [];
  email: string;
  phoneNumber: number;
  notes: string;
  address: string;
  zipcode: number;
  city: string;
  country: string;
  events: EventModel[] = [];
  province: string;
  contacts;
  nif: number;

  constructor(name: string, email: string, phoneNumber: number, notes: string, address: string, city: string, zipcode: number, country: string, province: string, nif: number) {
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.notes = notes;
    this.address = address;
    this.zipcode = zipcode;
    this.city = city;
    this.country = country;
    this.province = province;
    this.nif = nif;
  }

  addEvents(events: EventModel[]): Client {
    this.events.push(...events);
    return this;
  }

  addContacts(contacts): Client {
    this.contacts = contacts;
    return this;
  }

  addEvent(event: EventModel): Client {
    this.events.push(event);
    return this;
  }

  addClientTypes(clientType: []): Client {
    this.clientType = clientType;
    return this;
  }

}
