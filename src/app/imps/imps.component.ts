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
  public mode:string='IMPS';
  public date:string='';
  public time:string='';
  public dateTime = new Date();

  public Time:string = this.dateTime.toString().substring(16,24);
  public submitimps(){
    console.log(this.Time)
    var imps= {
      fromAccountNo:this.fromAccountNo,
      toAccountNo:this.toAccountNo,
      amount:this.amount,
      mode:this.mode,
      date:this.date,
      time:this.Time,
    }
    console.log(imps);
    console.log();
  this.service.PostImps(imps).subscribe();
}
}
