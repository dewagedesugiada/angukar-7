import { Component, OnInit, ViewChild } from '@angular/core';
import {Account} from '../account';
import { AccountService } from '../account.service';
import { UpdateAccountComponent } from '../update/update-account.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  account : Account [] = [] ;
  showDetail : boolean = false ;
  selectedAccount : Account = new Account() ;

  @ViewChild('formAccount')
  formAccount : UpdateAccountComponent ;

  constructor(private data : AccountService, private router : Router, private route : ActivatedRoute) { 
    
  }

  ngOnInit() {
     this.route.params.subscribe(params => {
       let customerNumber = params['customerNumber'];
      
    this.loadData(customerNumber);

    console.log(JSON.stringify(params))
      console.log('customerNumber : '+params['customerNumber']);
      
    });
  }

  loadData(customerNumber?){
    console.log(customerNumber);
    this.data.getAccount(customerNumber).subscribe((res)=>{
      Object.assign(this.account,res);
    }, err=> {
      alert('Error' + JSON.stringify(err));



    });
    // this.data.getAccount().subscribe(res=>{
    //   Object.assign(this.account,res);

    //   console.log(this.account);
    // }, err =>{
    //   console.log('Error' + JSON.stringify(err));
    // })
  }

  selectAccount(account : Account){
    let copyAccount = new Account();
    copyAccount.accountNumber = account.accountNumber;
    copyAccount.openDate = account.openDate;
    copyAccount.balance = account.balance;
    copyAccount.customerNumber = account.customerNumber;
    this.selectedAccount = copyAccount ;
    this.showDetail = true ; 
    this.formAccount ? this.formAccount.updateData() : "" ;

  }

  prosesResult(result){
    if(result){
      this.showDetail =false ;
      this.loadData() ;
    }
  }


  deleteAccount(accountNumber){
    if(confirm("Are you sure this delete accountNumber ? ")){
      this.data.deleteData(accountNumber).subscribe(res=>{
        location.href='/list_account';
      },err =>{
        alert("Error "+JSON.stringify(err));
        location.href='/list_account';

      })
    }

  }

  showTransaction(account : Account){
    this.router.navigate(['/list_transaction', {accountNumber : account.accountNumber}]);
  }

 

}
