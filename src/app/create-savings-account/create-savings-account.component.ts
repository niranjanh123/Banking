import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceModuleService} from '../../app/service-module.service'
@Component({
  selector: 'app-create-savings-account',
  templateUrl: './create-savings-account.component.html',
  styleUrls: ['./create-savings-account.component.css']
})
export class CreateSavingsAccountComponent{


  constructor(private service:ServiceModuleService) { }
  
  public title:string="";
  public firstName:string="";
  public middleName:string="";
  public lastName:string="";
  public fatherName:string="";
  public mobileNumber:string="";
  public emailId:string="";
  public addressLine1:string="";
  public addressLine2:string="";
  public landmark:string="";
  public state:string="";
  public city:string="";
  public pincode:string="";
  public aadharNumber:string="";
  public occupationType:string="";
  public sourceOfIncome:string="";
  public grossAnnualIncome:string="";
  
  createAccount(){
    
    var accountDetails = {
    title:this.title,
    firstName:this.firstName,
    middleName:this.middleName,
    lastName:this.lastName,
    fatherName:this.fatherName,
    mobileNumber:this.mobileNumber,
    emailId:this.emailId,
    addressLine1:this.addressLine1,
    addressLine2:this.addressLine2,
    landmark:this.landmark,
    state:this.state,
    city:this.city,
    pincode:this.pincode,
    aadharNumber:this.aadharNumber,
    occupationType:this.occupationType,
    sourceOfIncome:this.sourceOfIncome,
    grossAnnualIncome:this.grossAnnualIncome

    }
    this.service.PostCreateNewAccount(accountDetails).subscribe();
    alert('Your record has been added successfully!!');
  
  }
  
  

}
