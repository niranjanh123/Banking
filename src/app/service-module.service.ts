import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ServiceModuleService {

  constructor(private http:HttpClient) {}

  GetCreateNewAccount():Observable<any[]>{
    return this.http.get<any>('http://localhost:16047/api/Customers');
  }

  PostCreateNewAccount(val:any):Observable<any>{
    console.log('reached');
    console.log(val);
    return this.http.post('http://localhost:16047/api/Customers',val);
  }
 
  GetRegister():Observable<any[]>{
    return this.http.get<any>('http://localhost:16047/api/Registers');
  }
 
  PostRegister(val:any):Observable<any>{
    return this.http.post('http://localhost:16047/api/Registers',val);
  }

  GetLogin():Observable<any[]>{
    return this.http.get<any>('http://localhost:16047/api/Customers');
  }

  GetTransactionDetails():Observable<any[]>{
    return this.http.get<any>('http://localhost:16047/api/Transactions');
}
 GetBeneficiary():Observable<any[]>{
  return this.http.get<any>('http://localhost:16047/api/Beneficiaries');
}
  Postbeneficiary(val:any):Observable<any>{
  return this.http.post('http://localhost:16047/api/Beneficiaries',val);

}
  Postaccount(val:any):Observable<any>{
  return this.http.post('http://localhost:16047/api/Beneficiaries',val);}

  getaccount():Observable<any[]>{
    return this.http.get<any>('http://localhost:16047/api/Accounts');
}
    PostImps(val:any):Observable<any>{
      return this.http.post('http://localhost:16047/api/Transactions',val);
    }
    PostNeft(val:any):Observable<any>{
      return this.http.post('http://localhost:16047/api/Transactions',val);
    }
    PostRtgs(val:any):Observable<any>{
      return this.http.post('http://localhost:16047/api/Transactions',val);
    }
}

