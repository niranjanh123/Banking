import { Component, OnInit } from '@angular/core';

interface Accountdetails {
  Accno: string;
  AccType: string;
  branch: string;
 
}

const account: Accountdetails[] = [
  {
     Accno : "ADPOI76622166",
     AccType:"Savings",
     branch:"Bargur"
  },
  {
    Accno : "829PDIO664415",
    AccType:"Current",
    branch:"Chrompet"
 },
 {
  Accno : "DA4PO2316227",
  AccType:"Savings",
  branch:"Koduru"
}
 
];
@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css']
})
export class AccountStatementComponent implements OnInit {
  public AccountDetails = account;
  constructor() { }

  ngOnInit(): void {
  }

}
