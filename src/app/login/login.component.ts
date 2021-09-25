import { Component, OnInit } from '@angular/core';
import {LoginModel} from '../../app/login-model'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  login = new LoginModel('','password');
  gLength:number=8;
  hasLength:boolean=false;
  ngOnInit(): void {
  }
  // lengthCheck(){
  //   if(value.Length===this.gLength)
  //   {
  //     this.hasLength=true;
  //   }
  //   else{
  //     this.hasLength=false;
  //   }
  // }
}
