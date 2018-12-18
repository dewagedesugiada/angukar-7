import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer : Object ;
  constructor(private data : DataService) { }

  ngOnInit() {
    this.data.getCustomer().subscribe(data => {
      this.customer = data ;
      console.log(this.customer);
    });
  }

}
