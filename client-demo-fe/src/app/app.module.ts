import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ClientModule} from './client/client.module';
import {HttpClientModule} from '@angular/common/http';
import {EventModule} from './event/event.module';
import {ReactiveFormsModule} from '@angular/forms';
import {OWL_DATE_TIME_LOCALE, OwlDateTimeModule} from "ng-pick-datetime";
import {OwlMomentDateTimeModule} from "ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClientModule,
    AppRoutingModule,
    HttpClientModule,
    EventModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlMomentDateTimeModule,
  ],
  providers: [{
    provide: OWL_DATE_TIME_LOCALE,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
