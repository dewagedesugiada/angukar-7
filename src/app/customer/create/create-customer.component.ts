import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  @Input()
  customer : Customer ;

  @Output()
  result = new EventEmitter;

  constructor(private dataService : CustomerService ) { }

  ngOnInit() {
  }

  submitData(){
    this.dataService.createCustomer(this.customer).subscribe((res)=>{
      console.log(JSON.stringify(res));
      this.result.emit(true);      
      location.href='/list_customer';
    }, (err)=>{
      alert('Error'+ JSON.stringify(err));
    })
  }

  cancle(){
    this.result.emit(true);

  }

}
