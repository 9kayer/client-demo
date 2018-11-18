import { Event } from "./event";

export class Client{

    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    notes: string;
    address: string;
    zipcode: string;
    country: string;
    events: Event[] = [];

    constructor(id: string, name: string, email: string, phoneNumber: string, notes: string, address: string, zipcode: string, country: string, events: Event[]){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.notes = notes;
        this.address = address;
        this.zipcode = zipcode;
        this.country = country;
        this.events = events;
    }
}