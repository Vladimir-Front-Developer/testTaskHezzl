import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegFormComponent } from './reg-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    RegFormComponent
  ]
})
export class RegFormModule { }
