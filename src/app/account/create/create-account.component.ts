import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private data : AccountService, private router : Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      openDate : ['', Validators.required ],
      balance: ['', Validators.required ],
      customerNumber: ['', Validators.required ]
    });
  }

  addAccount(openDate, balance, customerNumber){
    this.data.addAccount(openDate, balance, customerNumber);
    this.router.navigate(["/list_account"]);
    
  }


  ngOnInit() {
  }

}
