import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { FormCustomerComponent } from '../form/form-customer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  @ViewChild('formCustomer')
  formCustomer : FormCustomerComponent ;

  constructor( private data : CustomerService, private route : Router ) { }

  // customer : Object ;
  customer : Customer[] = [] ;
  showDetail : boolean = false ;
  showForm : boolean = false ;
  selectedCustomer : Customer = new Customer() ;
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.data.getCustomer().subscribe(res => {
      // this.customer= res ;
      // console.log( JSON.stringify(res));
      Object.assign(this.customer, res)
      console.log(this.customer);
    }, err => {
      console.log("error "+ JSON.stringify(err)) ;
    }
    );
  }

  selectCustomer(customer: Customer) {

    let copyCustomer = new Customer();
    copyCustomer.customerNumber = customer.customerNumber ;
    copyCustomer.firstName = customer.firstName ;
    copyCustomer.lastName = customer.lastName ;
    copyCustomer.birthDate = customer.birthDate ;
    copyCustomer.username = customer.username ;
    copyCustomer.password = customer.password ;
    copyCustomer.phonetype = customer.phonetype ;
    copyCustomer.phoneNumber = customer.phoneNumber ;
    this.selectedCustomer = copyCustomer ;
    this.showDetail = true ;
    // this.showForm = false ;
    this.formCustomer ? this.formCustomer.updateData() : "" ;
      
    
  }

  prosesResult(result){
   if(result){
     this.showDetail =false ;
     this.showForm =false;
     this.loadData() ;
   } 
  }

  createData(){
    this.showForm = true ;
    this.showDetail = false ;
  }

  deleteCustomer(customerNumber){
    if(confirm('Are you sure delete this customerNumer ?')){
      this.data.delete(customerNumber).subscribe(res =>{
        location.href= "/list_customer" ;            
      },err=>{
        location.href= "/list_customer" ;      
      }
      );
    }

  }

  showAccount(customer : Customer){
    this.route.navigate(['/list_account',{customerNumber : customer.customerNumber}]);
  }

}
