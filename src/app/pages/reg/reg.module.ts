import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegComponent } from './reg.component';
import { RegFormModule } from 'src/app/components/reg-form/reg-form.module';



@NgModule({
  declarations: [
    RegComponent
  ],
  imports: [
    CommonModule,
    RegFormModule
  ]
})
export class RegModule { }
