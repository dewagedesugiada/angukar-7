import { Component, OnInit, ViewChild } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

import { UpdateAccountComponent } from 'src/app/account/update/update-account.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css']
})
export class ListTransactionComponent implements OnInit {
  @ViewChild('formTransaction')
  formTransaction : UpdateAccountComponent;

  transaction : Transaction[] = [];
  showDetail : boolean = false ;
  selectedTransaction : Transaction = new Transaction();

  constructor(private dataService : TransactionService, private route : ActivatedRoute ) { }

  ngOnInit() {

    this.route.params.subscribe(params=>{
      let accountNumber = params['accountNumber'];
      this.loadData(accountNumber) ;
    });
  }

  
  loadData(accountNumber?){
    this.dataService.showData(accountNumber).subscribe(res=>{
      Object.assign(this.transaction,res);
    }, err =>{
      alert("Error "+ JSON.stringify(err));
    });
  }

  selectTransaction(transaction : Transaction){
    let copytransaction = new Transaction();
    copytransaction.idTransaction = transaction.idTransaction; 
    copytransaction.type = transaction.type; 
    copytransaction.amount = transaction.amount; 
    copytransaction.amaountSign = transaction.amaountSign; 
    copytransaction.accountNumber = transaction.accountNumber; 

    this.selectedTransaction = copytransaction ;
    this.showDetail = true ;

    this.formTransaction ? this.formTransaction.updateData() : "" ;
    
  }

  prosesResult(result){
    if(result){
      this.showDetail=false ;
      this.loadData();
    }
  }

  deleteTransaction(idTransaction){
    if(confirm("are you sure you want to delete your transaction ?"))
    this.dataService.delete(idTransaction).subscribe(res=>{
      location.reload();
    },err=>{
      alert("Error "+ JSON.stringify(err));
    })
  }

}
