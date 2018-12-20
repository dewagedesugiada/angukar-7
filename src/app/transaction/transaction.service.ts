import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  ParenUri = 'http://localhost:8080/Transaction/';

  constructor(private http : HttpClient) { }

  createTransaction(transaction : Transaction){
    const uri = this.ParenUri + 'transaction';
    return this
    .http
    .post(uri, transaction);
  }

  getAccount(){
    return this.http.get('http://localhost:8080/account/accounts');
  }


  showData(accountNumber){
    let uri ;
    if(accountNumber !=undefined){
      uri = this.ParenUri + 'transactions?account='+accountNumber ;
    }else{
      uri = this.ParenUri + 'transactions' ;
    }
    return this
    .http
    .get(uri);
  }

  update(transaction : Transaction){
    const uri = this.ParenUri + 'transaction'
    return this
    .http
    .put(uri,transaction);
  }

  delete(id){
    const uri = this.ParenUri + 'transaction/' + id
    return this
    .http
    .delete(uri)
  }


}
