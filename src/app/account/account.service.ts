import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  addAccount(openDate, balance, customerNumber){
    const uri = this.Parenturi + 'account' ;
    const obj = {
      openDate : openDate,
      balance : balance,
      customerNumber : {
        customerNumber : customerNumber
      } 
    };
    console.log(obj);
    this.http.post(uri, obj).subscribe(res=> console.log("Done"));
  }
}
