import { Component, OnInit } from '@angular/core';
import {ServiceModuleService} from '../../app/service-module.service';
@Component({
  selector: 'app-neft',
  templateUrl: './neft.component.html',
  styleUrls: ['./neft.component.css']
})
export class NeftComponent implements OnInit {

  constructor(private service:ServiceModuleService) { }

  ngOnInit(): void {
  }
  public fromAccountNo:number=0;
  public toAccountNo:number=0;
  public amount:number=0;
  public mode:string ="NEFT";
  public date:string='';
  public time:string='';
  public dateTime = new Date();

  public Time:string = this.dateTime.toString().substring(16,24);
  public submitNeft(){
    var neft= {
      fromAccountNo:this.fromAccountNo,
      ToAccountNo:this.toAccountNo,
      amount:this.amount,
      mode:this.mode,
      date:this.date,
      time:this.Time,
    }
    console.log(neft);
  this.service.PostNeft(neft).subscribe();
}
}
