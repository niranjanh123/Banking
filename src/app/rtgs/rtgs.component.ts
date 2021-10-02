import { Component, OnInit } from '@angular/core';
import {ServiceModuleService} from '../../app/service-module.service';
@Component({
  selector: 'app-rtgs',
  templateUrl: './rtgs.component.html',
  styleUrls: ['./rtgs.component.css']
})
export class RtgsComponent implements OnInit {

  constructor(private service:ServiceModuleService) { }

  ngOnInit(): void {
  }
  public fromAccountNo:number=0;
  public toAccountNo:number=0;
  public amount:number=0;
  public mode:string ="RTGS";
  public date:string='';
  public time:string='';
  public dateTime = new Date();
  public Time:string = this.dateTime.toString().substring(16,24);
  
  public submitRtgs(){
    var rtgs= {
      fromAccountNo:this.fromAccountNo,
      toAccountNo:this.toAccountNo,
      amount:this.amount,
      mode:this.mode,
      date:this.date,
      time:this.Time,
    }
    console.log(rtgs);
  this.service.PostRtgs(rtgs).subscribe();
}

}
