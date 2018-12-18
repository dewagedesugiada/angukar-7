import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.css']
})
export class FormCustomerComponent implements OnInit {

    @Input()
    customer : Customer;

    @Output()
    result = new EventEmitter();

  constructor(private customService : CustomerService) { }

  ngOnInit() {
  }

  submitData(){
    this.customService.update(this.customer).subscribe( (res)=>{
      console.log(JSON.stringify(res));
      this.result.emit(true);
      location.href='/list_customer';
    }, (err) =>{
      alert("Error " + JSON.stringify(err));
    });
  }


  insertData(){
    this.customService.createCustomer(this.customer).subscribe( (res)=>{
      console.log(JSON.stringify(res));
      this.result.emit(true);
      location.href='/list_customer';
    }, (err) =>{
      alert("Error " + JSON.stringify(err));
    });
  }

  cancel(){
    this.result.emit(true);
  }


  // test(){
    
  //   let dataOri = 'BB';
  //   this.test2(dataOri);
  //   console.log('data ori' + dataOri);
  // }

  // data : string ;


  // test2 (data){
  //   data = 'AA' ;
  //   console.log('test ubah data' + data);
  // }

  // testcustomer(){
  //   let customer : Customer = new Customer ;
  //   customer.firstName = 'sulton' ;
  //   console.log('data asli' + customer.firstName);
  //   this.testLagi(customer);
  //   console.log('data asli' + customer.firstName);
    
  // }

  // testLagi(customer : Customer){
  //   customer.firstName = 'Dewa' ;
  //   console.log('data setelah diubah '+ customer.firstName);
  // }

}
