import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Account} from '../account';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Customer } from 'src/app/customer/customer';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  customer : Object ;

  @Input()
  account : Account ;

  @Output()
  result = new EventEmitter();
  
  accountForm : FormGroup
  constructor( private accountService : AccountService, private fb : FormBuilder ) { }

  ngOnInit() {
    this.accountForm = this.fb.group({
      accountNumber : [''],
      openDate : ['',Validators.required],
      balance : ['',Validators.required],
      customerNumber : ['', Validators.required]
    });
    this.updateData();
    this.getCustomer();
  }

  getCustomer(){
    this.accountService.getCustomerNumber().subscribe(res=>{
      this.customer = res ;
      console.log(this.customer);
    },err=>{
      console.log("error"+ JSON.stringify(err));
    });
  }

  updateData(){
    this.setdataForm(this.account);
  }

  setdataForm(account){
    if(account){
      this.accountForm.controls['accountNumber'].setValue(this.account.accountNumber);
      this.accountForm.controls['openDate'].setValue(this.account.openDate);
      this.accountForm.controls['balance'].setValue(this.account.balance);
      this.accountForm.controls['customerNumber'].setValue(this.account.customerNumber ? this.account.customerNumber.customerNumber : "");
    }
  }

  submitDatas(){
    let account :Account = new Account ;
    account.accountNumber=this.accountForm.controls['accountNumber'].value ;
    account.openDate=this.accountForm.controls['openDate'].value ;
    account.balance=this.accountForm.controls['balance'].value;

    let customer : Customer = new Customer;
    customer.customerNumber=this.accountForm.controls['customerNumber'].value;
    account.customerNumber=customer;

    console.log(account);

    //  console.log(this.accountForm.controls['customerNumber'].value);
   

    this.accountService.update(account).subscribe((res)=>{
      console.log(JSON.stringify(res));
      this.result.emit(true);
    }, (err)=>{
      alert("Error "+ JSON.stringify(err));
    });
  }

  cancel(){
    this.result.emit(true);
  }

}
