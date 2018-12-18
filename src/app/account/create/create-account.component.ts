import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private data : AccountService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      open_date: ['', Validators.required ],
      Balance: ['', Validators.required ],
      customerNumber: ['', Validators.required ]
    });
  }

  addAccount(open_date, Balance, customerNumber){
    this.data.addAccount(open_date, Balance, customerNumber);
  }


  ngOnInit() {
  }

}
