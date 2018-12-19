import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  customerFormGroup : FormGroup
  constructor(private customService : CustomerService, private fb: FormBuilder) { }

  ngOnInit() {
    this.customerFormGroup = this.fb.group({
      customerNumber : [''],
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      birthDate : ['' ,Validators.required],
      username : [''],
      password : [''],
      phonetype : [''],
      phoneNumber : ['', Validators.required]
    
    });
    this.updateData();

    
  }

  updateData(){
    this.setDataToForm(this.customer);
  }

  setDataToForm(customer){
    if(customer){
      this.customerFormGroup.controls['customerNumber'].setValue(this.customer.customerNumber);
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
    customer.customerNumber = this.customerFormGroup.controls['customerNumber'].value; 
    customer.firstName = this.customerFormGroup.controls['firstName'].value; 
    customer.lastName = this.customerFormGroup.controls['lastName'].value; 
    customer.birthDate = this.customerFormGroup.controls['birthDate'].value; 
    customer.username = this.customerFormGroup.controls['username'].value; 
    customer.password = this.customerFormGroup.controls['password'].value; 
    customer.phonetype = this.customerFormGroup.controls['phonetype'].value; 
    customer.phoneNumber = this.customerFormGroup.controls['phoneNumber'].value; 

    this.customService.update(customer).subscribe(res=>{
      console.log(JSON.stringify(res));
      this.result.emit(true);
    },err => {
      alert("Error " + JSON.stringify(err));
    });
    
  }

  submitDatass(){
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
