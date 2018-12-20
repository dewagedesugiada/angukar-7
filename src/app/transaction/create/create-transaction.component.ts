import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from '../transaction.service';
import { Router } from '@angular/router';
import { Transaction } from '../transaction';
import { Account } from 'src/app/account/account';


@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {
  account : Object ;
  transaction : Transaction [] = [] ;
  angForm : FormGroup;
  constructor( private fb : FormBuilder,private dataService : TransactionService, private route : Router ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      idTransaction : [''],
      type : ['', Validators.required ],
      amount: ['', Validators.required ],
      amaountSign: ['', Validators.required ],
      accountNumber: ['', Validators.required ]

    });
    this.getAccount();
  }

  getAccount(){
    this.dataService.getAccount().subscribe(res=>{
      this.account = res ;
      console.log(this.account);
    },err=>{
      console.log("error"+ JSON.stringify(err));
    });
  }

  addTransaction(){
    let transaction = new Transaction ;

    transaction.type = this.angForm.controls['type'].value;
    transaction.amount = this.angForm.controls['amount'].value;
    transaction.amaountSign = this.angForm.controls['amaountSign'].value;

    let account = new Account;
    account.accountNumber = this.angForm.controls['accountNumber'].value;
    transaction.accountNumber=account;

    console.log(this.angForm.controls['accountNumber'].value)
    console.log(transaction.accountNumber)
    console.log(transaction);

    this.dataService.createTransaction(transaction).subscribe(res=>{
      Object.assign(this.transaction,res) ;
    }, err=>{
      alert('salah' + JSON.stringify(err));
    })
    this.route.navigate(['/list_transaction']);

  }


}
