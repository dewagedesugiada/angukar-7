import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import Account from '../account';
import { Customer } from 'src/app/customer/customer';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  customer : Object ;
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private data : AccountService, private router : Router) {
    this.createForm();
  }

  getCustomer(){
    this.data.getCustomerNumber().subscribe(res=>{
      this.customer = res ;
      console.log(this.customer);
    },err=>{
      console.log("error"+ JSON.stringify(err));
    });
  }


  createForm() {
    this.angForm = this.fb.group({
      openDate : ['', Validators.required ],
      balance: ['', Validators.required ],
      customerNumber: ['', Validators.required ]
    });
    this.getCustomer();
  }

  addAccount(){
    let account = new Account ;
    account.openDate=this.angForm.controls['openDate'].value ;
    account.balance=this.angForm.controls['balance'].value;

    let customer = new Customer;
    customer.customerNumber=this.angForm.controls['customerNumber'].value;
    account.customerNumber=customer;

    console.log(this.angForm.controls['customerNumber'].value);
    this.data.addAccount(account);

    this.router.navigate(["/list_account"]);
    
  }

  ngOnInit() {
  }

}
