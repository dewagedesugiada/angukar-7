import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer/list/customer-list.component';
import { FormCustomerComponent } from './customer/form/form-customer.component';
import { CustomerService } from './customer/customer.service';
import { CreateCustomerComponent } from './customer/create/create-customer.component';
import { AccountListComponent } from './account/list/account-list.component';
import { CreateAccountComponent } from './account/create/create-account.component';
import { AccountService } from './account/account.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SignupComponent,
    CustomerComponent,
    CustomerListComponent,
    FormCustomerComponent,
    CreateCustomerComponent,
    AccountListComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [CustomerService, AccountService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
