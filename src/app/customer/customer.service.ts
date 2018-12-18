import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( private http : HttpClient) { }
  ParenUri = 'http://localhost:8080/customer/';

  getCustomer(){
    const uri = this.ParenUri + 'customer' ;
    return this
    .http
    .get(uri);
  }

  update(customer : Customer){
    const uri = this.ParenUri + 'customer' ;
    return this
    .http
    .put(uri, customer);
  }

  delete(customerNumber){
    const uri = this.ParenUri + 'customer/' + customerNumber ;
    return this
    .http
    .delete(uri)
  }

  createCustomer(customer : Customer){
    const uri = this.ParenUri + 'customer' ;
    return this
    .http
    .post(uri,customer)
  }


}
