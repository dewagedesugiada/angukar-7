import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer/list/customer-list.component';
import { FormCustomerComponent } from './customer/form/form-customer.component';
import { CreateCustomerComponent } from './customer/create/create-customer.component';
import { CreateAccountComponent } from './account/create/create-account.component';

const routes: Routes = [
   { path : '' , component : HomeComponent  },
   { path : 'customer' , component : CustomerComponent  },
   { path : 'list_customer', component : CustomerListComponent },
   { path : 'formCustomer', component : FormCustomerComponent },
   { path : 'createCustomer', component : CreateCustomerComponent},
   { path : 'signup' , component : SignupComponent },
   { path : 'createAccount', component : CreateAccountComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
