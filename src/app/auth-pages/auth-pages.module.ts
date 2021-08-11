import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPagesRoutingModule } from './auth-pages-routing.module';

import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RegistersComponent } from './registers/registers.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistersComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthPagesRoutingModule
  ]
})
export class AuthPagesModule { }
