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

  constructor(private data : AccountService) { }

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

 

}
