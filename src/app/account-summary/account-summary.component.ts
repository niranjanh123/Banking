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
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {
  public AccountDetails = account;
  constructor() { }

  ngOnInit(): void {
  }

}
