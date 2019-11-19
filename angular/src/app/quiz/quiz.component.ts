import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
//import { HomeComponent } from '../home/home.component';
import { question } from '../models/question';
//import { ValueConverter } from '@angular/compiler/src/render3/view/template';
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
  answers={"choice":['','','','',''], "category":''};
  arrquiz: question [];
  correct:number;
  wrong:number;
  timer: any = null;
  startTime: Date;
  ellapsedTime = '00:00';
  durationSec:number=300;
  duration = '';
  constructor (private httpService: HttpClient,private router: Router, public result: ResultService,private cat:homeService) {
    this.correct=0;
    this.wrong=0;
   }
  

  ngOnInit() {
    this.cat.currentcategory.subscribe(message => this.answers.category = message)
    this.answers.choice=["","","","",""];
    this.cat.getquiz(this.answers.category).subscribe(
      data => {
        
        this.arrquiz = data as question [];	 // FILL THE ARRAY WITH DATA.
          console.log(this.arrquiz[1].correct);
          this.startTime = new Date();
          this.ellapsedTime = '00:00';
          this.timer = setInterval(() => { this.tick(); }, 1000);
          this.duration = this.parseTime(300);
          
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

    /*this.httpService.get('./assets/'+this.category+'quiz.json').subscribe(
      data => {
        this.arrquiz = data as question [];	 // FILL THE ARRAY WITH DATA.
          console.log(this.arrquiz[1].correct);
          
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );*/

  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.durationSec) {
      this.show();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

add(event) { 
  var x = event.target;
  //document.getElementById("demo").innerHTML = "for this question"+x.name+"this answer was selected"+x.value;
  //this.selection.push(x.name);
  this.answers.choice[x.name]=x.value;
}

show()
{
  clearInterval( this.timer);
  /*for (let i:number = 0; i < 5; i++) {
    if(this.arrquiz[i].correct==this.answers[i]){
      this.correct= this.correct+1;
      console.log(this.arrquiz[i].correct);
      console.log(this.correct);
    }
    else{
      this.wrong= this.wrong+1;
    }
  }*/
  //document.getElementById("demo").innerHTML = this.score.toString();

  this.result.changeResult(this.correct);
  this.result.setscore(this.answers);
  console.log(this.result.getscore());
  this.result.changewrong(this.wrong);
  

} 
}
