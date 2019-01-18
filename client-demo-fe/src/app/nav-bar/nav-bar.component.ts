import {Component, OnInit} from '@angular/core';
import {ImageLoaderService} from '../shared/image-loader.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private imageLoaderService: ImageLoaderService) {
  }

  ngOnInit() {
  }

  loadLogo(): string {
    return this.imageLoaderService.loadCompanyLogo();
  }
}
