import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import {FormBuilder, FormGroup, Validators } from '@angular/forms'

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

  customerFormGroup : FormGroup ;
  constructor(private dataService : CustomerService, private fb : FormBuilder ) { }

  ngOnInit() {

    this.customerFormGroup = this.fb.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      birthDate : ['' ,Validators.required],
      username : [''],
      password : [''],
      phonetype : [''],
      phoneNumber : ['', Validators.required]
    
    });

    if(this.customer){
      // this.customerFormGroup.controls['customerNumber'].setValue(this.customer.customerNumber);
      this.customerFormGroup.controls['firstName'].setValue(this.customer.firstName);
      this.customerFormGroup.controls['lastName'].setValue(this.customer.lastName);
      this.customerFormGroup.controls['birthDate'].setValue(this.customer.birthDate);
      this.customerFormGroup.controls['username'].setValue(this.customer.username);
      this.customerFormGroup.controls['password'].setValue(this.customer.password);
      this.customerFormGroup.controls['phonetype'].setValue(this.customer.phonetype);
      this.customerFormGroup.controls['phoneNumber'].setValue(this.customer.phoneNumber);
    }
  }

  submitData(){
    let customer : Customer = new Customer();
    // customer.customerNumber = this.customerFormGroup.controls['customerNumber'].value; 
    customer.firstName = this.customerFormGroup.controls['firstName'].value; 
    customer.lastName = this.customerFormGroup.controls['lastName'].value; 
    customer.birthDate = this.customerFormGroup.controls['birthDate'].value; 
    customer.username = this.customerFormGroup.controls['username'].value; 
    customer.password = this.customerFormGroup.controls['password'].value; 
    customer.phonetype = this.customerFormGroup.controls['phonetype'].value; 
    customer.phoneNumber = this.customerFormGroup.controls['phoneNumber'].value; 

    this.dataService.update(customer).subscribe(res=>{
      console.log(JSON.stringify(res));
      this.result.emit(true);
    },err => {
      alert("Error " + JSON.stringify(err));
    });

  }

  





  // submitDatas(){
  //   this.dataService.createCustomer(this.customer).subscribe((res)=>{
  //     console.log(JSON.stringify(res));
  //     this.result.emit(true);      
  //     location.href='/list_customer';
  //   }, (err)=>{
  //     alert('Error'+ JSON.stringify(err));
  //   })
  // }

  cancle(){
    this.result.emit(true);

  }

}
