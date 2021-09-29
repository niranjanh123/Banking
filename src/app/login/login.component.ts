import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  CustomerID:string='';
  password:string='';

  ngOnInit(): void {
  }
  constructor(private router: Router) { }
  login(){
    this.router.navigateByUrl('/profile');
  }
}
  // const url = this.router.serializeUrl(
    //   this.router.createUrlTree([`/main`]) will open a new tab with specified url
    // );
    // window.open(url, '_blank');