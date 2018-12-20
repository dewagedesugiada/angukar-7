import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from '../transaction';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from '../transaction.service';
import { Account } from 'src/app/account/account';

@Component({
  selector: 'app-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.css']
})
export class UpdateTransactionComponent implements OnInit {
  account : Object;
  @Input()
  transaction : Transaction ;

  @Output()
  result = new EventEmitter
  angForm : FormGroup;
  constructor(private dataService : TransactionService, private fb : FormBuilder) { }

  ngOnInit() {
    this.angForm = this.fb.group({
      idTransaction : [''],
      type : ['',Validators.required],
      amount : ['',Validators.required],
      amaountSign : ['',Validators.required],
      accountNumber : ['',Validators.required]
    });
    this.updateData();
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


  updateData(){
    this.setDataToForm(this.transaction);
  }

  setDataToForm(transaction){
    if(transaction){
      this.angForm.controls['idTransaction'].setValue(this.transaction.idTransaction);
      this.angForm.controls['type'].setValue(this.transaction.type);
      this.angForm.controls['amount'].setValue(this.transaction.amount);
      this.angForm.controls['amaountSign'].setValue(this.transaction.amaountSign);
      this.angForm.controls['accountNumber'].setValue(this.transaction.accountNumber ? this.transaction.accountNumber.accountNumber : "" );

    }
  }

  submitData(){
    let transaction : Transaction = new Transaction();
    transaction.idTransaction = this.angForm.controls['idTransaction'].value;
    transaction.type = this.angForm.controls['type'].value;
    transaction.amount = this.angForm.controls['amount'].value;
    transaction.amaountSign = this.angForm.controls['idTransaction'].value;

    let account : Account = new Account();
    account.accountNumber = this.angForm.controls['accountNumber'].value ;
    transaction.accountNumber=account;
    this.dataService.update(transaction).subscribe(res=>{
      console.log(JSON.stringify(res));
      this.result.emit(true);
    },err =>{
      alert('error'+ JSON.stringify(err));
    })
  }

  cancel(){
    this.result.emit(true);
  }

}
