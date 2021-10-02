import { Component, OnInit } from '@angular/core';
import {ServiceModuleService} from '../../app/service-module.service'

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  public newRegistrations:any=[];

   newAccount={accountType:"savings",balance:"10000",customerId:0}

  constructor(private service:ServiceModuleService) { }

  ngOnInit(): void {
  }
  // public getRegistrationDetails()
  //  {
  //  	this.service.GetRegister().subscribe(data=>{this.newRegistrations=data;})
  //  }
   public Approve(Customerapproved:any)
    {
	// delete(Customerapproved.referenceid)
	// this.service.PostCreateNewAccount(Customerapproved).suscribe();
  //       this.service.GetCustomerDetails(Customerapproved.aadharNumber).subscribe(data=>{this.newAccount.customerId=data[0].customerId});
  //       this.service.PostCustomerDetails(newAccount).suscribe();
   }
   public Reject(){

   }
}
//var rowId = event.target.parentNode.parentNode.id;
//var elms = document.getElementById(rowId).getElementsByTagName("td");
//this.aaadharApproved=elms[4].innerText;