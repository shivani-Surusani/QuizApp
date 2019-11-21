import { Component, OnInit, AfterViewInit, ViewChild,Input} from '@angular/core';
import { Router } from '@angular/router';
import {QuizComponent} from '../quiz/quiz.component';
import { homeService } from '../service/home.service';
import { HttpClient,HttpParams } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(private router: Router, private cat:homeService, private http: HttpClient) { }

topic: string;
SelectedCategory:string;

data = [
{id: 0, name: 'dance'},
{id: 1, name: 'sports'},
{id: 2, name: 'music'}
];

loggedin:boolean=false;
ngOnInit() {
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
 
}

setCategory(event){
var x=event.target;
this.SelectedCategory=x.value;
this.cat.changecat(this.SelectedCategory);
console.log(this.SelectedCategory);
}

loadQuiz(){
console.log(this.SelectedCategory);
if(this.SelectedCategory!=null){
this.router.navigate(['/quiz']);
}
else{
alert("Please select a category");
}
}

}