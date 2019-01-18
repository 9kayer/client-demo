import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Client} from '../../../model/client';
import {ActivatedRoute} from '@angular/router';
import {ClientService} from '../../service/client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  @Input() data;
  clientForm: FormGroup;
  editMode = false;
  client: Client;

  constructor(private route: ActivatedRoute,
              private clientService: ClientService) {
  }

  ngOnInit() {
    this.getClient();
  }


  getClient() {
    this.route.params
      .subscribe(params => {
        this.clientService.get(params['id']).subscribe((client: Client) => {
            this.client = client;
            this.editMode = true;
            this.initForm();
          }
        );
      });
  }

  initForm() {
    this.clientForm = new FormGroup({
      'id': new FormControl(null),
      'name': new FormControl(null),
      'email': new FormControl(null, [Validators.email]),
      'phoneNumber': new FormControl(null, [Validators.email]),
      'address': new FormControl(null),
      'zipcode': new FormControl(null),
      'city': new FormControl(null),
      'country': new FormControl(null),
      'nif': new FormControl(null, [Validators.max(9)]),
      'province': new FormControl(null),
      'site': new FormControl(null),
      'account': new FormControl()

    });

    if (this.editMode) {
      this.clientForm.patchValue(this.client);
    }
  }

  onSubmit() {

    const client = this.clientForm.getRawValue();

    this.clientService.update(client).subscribe();
  }
}
