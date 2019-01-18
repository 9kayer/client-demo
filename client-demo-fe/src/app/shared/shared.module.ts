import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {OWL_DATE_TIME_FORMATS, OwlDateTimeModule} from 'ng-pick-datetime';
import {OwlMomentDateTimeModule} from 'ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time.module';

export const CUSTOM_MOMENT_FORMATS = {
  datePickerInput: 'MMM D, YYYY',
  timePickerInput: 'MMM D YYYY',
  monthYearLabel: 'MMM YYYY'
};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlMomentDateTimeModule,
  ],
  exports: [
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlMomentDateTimeModule,
  ],
  providers: [
    {provide: OWL_DATE_TIME_FORMATS, useValue: CUSTOM_MOMENT_FORMATS}
  ],
})
export class SharedModule {
}
