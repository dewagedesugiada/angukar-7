import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Account from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  Parenturi = 'http://localhost:8080/account/';

  constructor( private http : HttpClient ) { }

  getAccount(){
    const uri = this.Parenturi + 'accounts' ;
    return this
    .http
    .get(uri);
  }

  addAccount(account : Account){
    const uri = this.Parenturi + 'account' ;
    // const obj = {
    //   openDate : openDate,
    //   balance : balance,
    //   customerNumber : {
    //     customerNumber : customerNumber
    //   } 
    // };
    console.log(account);
    this.http.post(uri, account).subscribe(res=> console.log("Done"));
  }

  getCustomerNumber(){
    return this.http.get('http://localhost:8080/customer/customer')
  }

  deleteData(accountNumber){
    const uri = this.Parenturi + 'account/' + accountNumber ;
    return this
    .http
    .delete(uri);
  }

}
