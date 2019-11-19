import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient,HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'; 
import { result } from '../models/result';
import { Router } from '@angular/router';
@Injectable()
export class ResultService {


  private ResultSource = new BehaviorSubject(0);
  currentResult = this.ResultSource.asObservable();
  private RS = new BehaviorSubject(0);
  CR = this.RS.asObservable();
  result:result;
  constructor(private http: HttpClient, private router: Router) { }
  //flag:int=0;
  changeResult(result: number) {
    this.ResultSource.next(result)
  }
  changewrong(r: number) {
    this.RS.next(r);
  }
  changescore(s:result){
    this.result=s;
  }
  getscore(){
    
      return this.result;
 
  }
  setscore(correct){
    console.log('inside result service');
    console.log(correct);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    let body=correct;
    this.http.post('http://localhost:4200/api/v1/endpoint3/',body, options).subscribe(
      data => {
        this.changescore(data as result);	 // FILL THE ARRAY WITH DATA.
        console.log("Result:"+this.result);

        this.router.navigate(['../result']);
          
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
   // console.log(this.result);
  }

}