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
import { EnigmaPipe } from './share/enigma.pipe';
import { UpdateAccountComponent } from './account/update/update-account.component';
import { ListTransactionComponent } from './transaction/list/list-transaction.component';
import { CreateTransactionComponent } from './transaction/create/create-transaction.component';
import { UpdateTransactionComponent } from './transaction/update/update-transaction.component';
import { PipeCustomerPipe } from './customer/pipe-customer.pipe';
import { CurrencyPipe } from '@angular/common';
import { ComboCustomerComponent } from './share/component/customer/combo-customer.component';

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
    CreateAccountComponent,
    EnigmaPipe,
    UpdateAccountComponent,
    ListTransactionComponent,
    CreateTransactionComponent,
    UpdateTransactionComponent,
    PipeCustomerPipe,
    ComboCustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [CustomerService, AccountService, CurrencyPipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
