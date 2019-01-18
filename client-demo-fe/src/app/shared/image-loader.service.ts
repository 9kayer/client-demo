import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageLoaderService {

  /*Root of assets folder */
  src = 'assets';

  constructor() {
  }

  loadCompanyLogo(): string {
    return `${this.src}/company-logo.jpg`;
  }
}
