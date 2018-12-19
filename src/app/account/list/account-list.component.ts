import { Component, OnInit } from '@angular/core';
import Account from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  account : Account [] = [] ;

  constructor(private data : AccountService) { 
    this.loadData();
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.data.getAccount().subscribe(res=>{
      Object.assign(this.account,res);

      console.log(this.account);
    }, err =>{
      console.log('Error' + JSON.stringify(err));
    })
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

 

}
