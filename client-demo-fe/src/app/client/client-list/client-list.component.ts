import {Component, OnInit} from '@angular/core';
import {Client} from 'src/app/model/client';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../service/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  public clientList: Client[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {
    this.route = route;

  }

  ngOnInit() {
    this.getAllClients();
  }

  /**
   * TODO this sort shouldn't be necessary. Look into it.
   */
  getAllClients(): void {
    this.clientService.getAll()
      .subscribe((clientList: Client[]) => this.clientList = clientList.sort((a, b) => a.id <= b.id ? 0 : 1));
  }

  loadClient(id) {
    this.router.navigate(['clients/', id]);
  }

}
