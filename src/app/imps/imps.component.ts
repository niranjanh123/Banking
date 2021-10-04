import { Component, OnInit } from '@angular/core';
import {ServiceModuleService} from '../../app/service-module.service';
@Component({
  selector: 'app-imps',
  templateUrl: './imps.component.html',
  styleUrls: ['./imps.component.css']
})
export class ImpsComponent implements OnInit {

 
  constructor(private service:ServiceModuleService) { }
  ngOnInit(): void {
  }
 
  public fromAccountNo:number=0;
  public toAccountNo:number=0;
  public amount:number=0;
  public transactionPassword:string='';
  public mode:string='IMPS';
  public date:string='';
  public time:string='';
  public dateTime = new Date();

   flag:boolean=false;
   flag1:boolean=false;
   flag2:boolean=false;
  
//AccountNumber: 10000, Balance: 10000, AccountType: 'string', CustomerId: 7003,
  public Time:string = this.dateTime.toString().substring(16,24);
  public submitimps(){
  
    this.service.getaccount().subscribe(data=>
      {
        for(let obj of data)
        {
          if(this.fromAccountNo==<any>obj.AccountNumber)
          {
            console.log('erached1')
            this.flag=true;
          }
        }
        for(let obj of data)
        {
          if(this.fromAccountNo==<any>obj.AccountNumber)
          {
            console.log('erached2')
            this.flag1=true;
          }
        }  
      })
//{InternetBankingId: 5001, CustomerId: 7004, TransactionPassword: 'string', AccountNumber: 10001,
      this.service.getInternetBanking().subscribe(res=>
        {
          console.log(res)
          for(let obj1 of res){
            if(this.fromAccountNo==<any>obj1.AccountNumber && (this.fromAccountNo.toString()==sessionStorage.getItem('UserAccountNumber'))){
              if(this.transactionPassword==<any>obj1.TransactionPassword)
              {
                console.log('erached3')
                this.flag2=true;
              }
            }
          }
        })
      console.log(this.flag+' '+this.flag1+' '+this.flag2)
      if(this.flag==false){
        alert('Entered wrong Account Number')
      }
      else if(this.flag1==false){
        alert('Entered wrong Beneficiary Account Number')
      }
      else if(this.flag2==false){
        alert('Entered wrong Transaction Password')
      }
      else if(this.flag&&this.flag1&&this.flag2){
        var imps= {
          fromAccountNo:this.fromAccountNo,
          toAccountNo:this.toAccountNo,
          amount:this.amount,
          mode:this.mode,
          date:this.date,
          time:this.Time,
        }
        console.log(imps);
        this.service.PostImps(imps).subscribe();
      }
   
}
}
