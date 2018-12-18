import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  Parenturi = 'http://localhost:8080/account/';

  constructor( private http : HttpClient ) { }

  addAccount(open_date, Balance, customerNumber){
    const uri = this.Parenturi + 'account' ;
    const obj = {
      open_date : open_date,
      Balance : Balance,
      customerNumber : customerNumber
    };
    console.log(obj);
    this.http.post(uri, obj).subscribe(res=> console.log("Done"));
  }
}
