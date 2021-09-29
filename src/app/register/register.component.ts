import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
import {FormBuilder,Validator} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // OneTimeRegisteration = new FormGroup({
  //   CustomerID: new FormControl(''),
  //   OTP: new FormControl(''),
  //   NewPassword: new FormControl(''),
  //   RNewPassword: new FormControl(''),
  // })

  CustomerID:string='';
  password:string='';
  phonenumber:string='';
  npassword:string='';
  otp:string=''
  constructor(private reg:FormBuilder) { }

    OneTimeRegisteration = this.reg.group({
    CustomerID: ['',Validators.required],
    OTP: ['',Validators.required],
    NewPassword: ['',[Validators.required,Validators.minLength(8)]],
    RNewPassword: ['',[Validators.required,Validators.minLength(8)]],
  })

  ngOnInit(): void {
  }

}
