import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor( private http : HttpClient ) { }
  ParentUri = 'http://localhost:8080/customer/'
  getCustomer(){
    const uri = this.ParentUri + 'customer' ;
    return this
    .http
    .get(uri);
  }

  

}
