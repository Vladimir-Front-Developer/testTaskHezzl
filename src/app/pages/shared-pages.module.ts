import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegModule } from './reg/reg.module';
import { LoginModule } from './login/login.module';
import { AccountModule } from './account/account.module';



@NgModule({
  imports: [
    CommonModule,
    RegModule,
    LoginModule,
    AccountModule
  ],
  exports: [
    RegModule,
    LoginModule,
    AccountModule
  ]
})
export class PagesModule { }
