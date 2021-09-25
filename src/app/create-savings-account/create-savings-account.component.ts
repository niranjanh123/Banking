import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms'
@Component({
  selector: 'app-create-savings-account',
  templateUrl: './create-savings-account.component.html',
  styleUrls: ['./create-savings-account.component.css']
})
export class CreateSavingsAccountComponent implements OnInit {

  
  constructor(private fb:FormBuilder) { }

  createNewAccount = this.fb.group({
    Title:['',Validators.required],
    FirstName:['',Validators.required],
    MiddleName:['',Validators.required],
    LastName:['',Validators.required],
    FatherName:['',Validators.required],
    MobNo:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    EmailID:['',Validators.required],
    Aadhar:['',Validators.required],
    DOB:['',Validators.required],
    AddressLine1:['',Validators.required],
    AddressLine2:['',Validators.required],
    Landmark:['',Validators.required],
    State:['',Validators.required],
    City:['',Validators.required],
    Pincode:['',Validators.required],
    RAddressLine1:['',Validators.required],
    RAddressLine2:['',Validators.required],
    RLandmark:['',Validators.required],
    RState:['',Validators.required],
    RCity:['',Validators.required],
    RPincode:['',Validators.required],
    OccupationType:['',Validators.required],
    SourceOfIncome:['',Validators.required],
    AnnualIncome:['',Validators.required],
  })

  ngOnInit(): void {
  }

}
