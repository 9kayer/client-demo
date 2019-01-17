import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {identifierModuleUrl} from '@angular/compiler';
import {EventModel} from "../model/event";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseURL = 'http://localhost:20001/api';
  eventUrl = this.baseURL + '/events';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {

  }

  getEvent(id) {
    return this.httpClient.get(this.eventUrl + '/' + id, this.httpOptions);
  }

  getAll() {
    return this.httpClient.get(this.eventUrl, this.httpOptions);
  }

  update(eventid: any, event: EventModel) {
    return this.httpClient.patch(this.eventUrl + '/' + eventid, event);
  }


}
