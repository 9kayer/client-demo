import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-client-companies',
  templateUrl: './client-companies.component.html',
  styleUrls: ['./client-companies.component.css']
})
export class ClientCompaniesComponent implements OnInit {

  @Input() companies;

  constructor() {
  }

  ngOnInit() {
  }

}
