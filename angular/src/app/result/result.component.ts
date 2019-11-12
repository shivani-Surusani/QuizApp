import { Component, OnInit } from '@angular/core';
import { QuizComponent } from '../quiz/quiz.component';
import { ResultService } from '../service/result.service';
import { Router } from '@angular/router'
import { HomeComponent } from '../home/home.component'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
    scores : number;
     wrong : number;
  constructor(public result: ResultService,public router: Router) {
   }
  

  ngOnInit() {
    this.result.currentResult.subscribe(message => this.scores= message);
    this.result.CR.subscribe(m=>this.wrong=m);
  }

  redirect(){
    this.router.navigate(['../home']);
  }

}