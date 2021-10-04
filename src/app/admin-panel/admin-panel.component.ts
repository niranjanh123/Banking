import { Component, OnInit } from '@angular/core';
import {ServiceModuleService} from '../../app/service-module.service'

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  public newRegistrations:any=[];
  public customerId:number=0
  newAccount={accountType:"savings",balance:"10000",customerId:0}

  constructor(private service:ServiceModuleService) { }

  ngOnInit(): void {
    this.getRegistrationDetails();
  }
  public getRegistrationDetails()
   {
   	this.service.GetCreateNewAccount().subscribe(data=>
      {
        console.log(data)
        this.newRegistrations=data;
      })
   }
   public approve()
    {
      alert('All Accounts Approved');
   }
   public reject(){
      console.log(this.customerId)
      this.service.DeleteCreateNewAccount(this.customerId).subscribe();
      alert()
   }
}
//var rowId = event.target.parentNode.parentNode.id;
//var elms = document.getElementById(rowId).getElementsByTagName("td");
//this.aaadharApproved=elms[4].innerText;

/*
AadharNumber: "string"
Accounts: []
AddressLine1: "string"
AddressLine2: "string"
City: "string"
CustomerId: 7000
EmailId: "string"
FatherName: "string"
FirstName: "string"
GrossAnnualIncome: "string"
InternetBankings: []
Landmark: "string"
LastName: "string"
MiddleName: "string"
MobileNumber: "string"
OccupationType: "string"
Pincode: "string"
Registers: []
SourceOfIncome: "string"
State: "string"
Title: "string"
*/