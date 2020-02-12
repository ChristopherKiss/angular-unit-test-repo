import { Component } from '@angular/core';

@Component({
    selector: 'app-component-4',
    template: `
    <mat-form-field>
  <mat-label>Choose a date</mat-label>
  <input matInput [matDatepicker]="picker">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>
    `,
    styles: [``]
})
export class Test4Component {}
