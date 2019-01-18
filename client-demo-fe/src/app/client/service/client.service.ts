import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

import {Client} from '../../model/client';
import {EventModel} from '../../model/event';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  baseURL = 'http://localhost:20001/api';
  clientURL = '/clients';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  get(id: string): Observable<Client> {

    return this.http.get<Client>(this.baseURL + this.clientURL + '/' + id, this.httpOptions);
  }

  getAll(): Observable<Client[]> {

    return this.http.get<Client[]>(this.baseURL + this.clientURL, this.httpOptions);
  }

  update(client: Client): Observable<Object> {

    return this.http.patch(this.baseURL + this.clientURL + '/' + client.id, client, this.httpOptions);
  }
}
