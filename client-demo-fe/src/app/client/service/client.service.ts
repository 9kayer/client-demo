import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Client } from '../../model/client';
import { EventModel } from '../../model/event';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  baseURL = 'http://localhost:20001/api';
  clientURL = '/clients';

  constructor(private http: HttpClient) { }

  get(id: string): Observable<Client> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get<Client>(this.baseURL + this.clientURL + '/' + id, httpOptions);
  }

  getAll(): Observable<Client[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get<Client[]>(this.baseURL + this.clientURL, httpOptions);
  }

  update(client: Client): Observable<Object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.put(this.baseURL + this.clientURL + '/' + client.id, client, httpOptions);
  }
}
