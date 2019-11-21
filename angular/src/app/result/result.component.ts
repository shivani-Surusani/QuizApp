import { Component, OnInit } from '@angular/core';
import { QuizComponent } from '../quiz/quiz.component';
import { ResultService } from '../service/result.service';
import { Router } from '@angular/router'
import { HomeComponent } from '../home/home.component'
import { result } from '../models/result';
import { HttpClient,HttpParams } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  r:result;
  loggedin:boolean=false;
  constructor(private http: HttpClient,public result: ResultService,public router: Router) {
  }
  

  ngOnInit() {
    //this.result.currentResult.subscribe(message => this.scores= message);
    this.http.get('http://localhost:4200/api/v1/endpoint1/login',{withCredentials: true}).subscribe(
        (resp: any) => {
            this.loggedin =  resp.loggedIn;
            if(!this.loggedin){
                this.router.navigate(['../error']);
            }
          }, 
          (err: HttpErrorResponse) => {
            console.log (err.message);
          }
    );
    this.r=this.result.getscore();
  }

  redirect(){
    this.router.navigate(['../home']);
  }

}