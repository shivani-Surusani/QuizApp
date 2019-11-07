import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HomeComponent } from '../home/home.component';
import { question } from '../models/question';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { appRoutes } from '../routes'
import { Router } from '@angular/router';
import { ResultService } from '../service/result.service';
import { homeService } from '../service/home.service'
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  //title = 'Quiz of music';
  answers:String[];
  arrquiz: question [];
  score:number;
  wrong:number;
  constructor (private httpService: HttpClient,private home: HomeComponent,private router: Router, public result: ResultService,private cat:homeService) {
    this.score=0;
    this.wrong=0;
   }
  
category:string;
  ngOnInit() {
    this.cat.currentcategory.subscribe(message => this.category = message)
    this.answers=["","","","",""];
    
    this.httpService.get('./assets/'+this.category+'quiz.json').subscribe(
      data => {
        this.arrquiz = data as question [];	 // FILL THE ARRAY WITH DATA.
          console.log(this.arrquiz[1].correct);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

add(event) { 
  var x = event.target;
  //document.getElementById("demo").innerHTML = "for this question"+x.name+"this answer was selected"+x.value;
  //this.selection.push(x.name);
  this.answers[x.name]=x.value;
}

show()
{
  
  for (let i:number = 0; i < 5; i++) {
    if(this.arrquiz[i].correct==this.answers[i]){
      this.score= this.score+5;
      console.log(this.arrquiz[i].correct);
      console.log(this.score);
    }
    else{
      this.wrong= this.wrong+1;
    }
  }
  //document.getElementById("demo").innerHTML = this.score.toString();
  this.result.changeResult(this.score);
  this.result.changewrong(this.wrong);
  this.router.navigate(['../result']);

} 
}
