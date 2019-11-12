import { Component, OnInit, AfterViewInit, ViewChild,Input} from '@angular/core';
import { Router } from '@angular/router';
import {QuizComponent} from '../quiz/quiz.component'
import { homeService } from '../service/home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  constructor(private router: Router, private cat:homeService) { }

  topic: string;
  SelectedCategory:string;
  
  data = [
  {id: 0, name: 'dance'},
  {id: 1, name: 'sports'},
  {id: 2, name: 'music'}
  ];
  
  ngOnInit() {}
  setCategory(event){
    var x=event.target;
    this.SelectedCategory=x.value;
    this.cat.changecat(this.SelectedCategory);
    console.log(this.SelectedCategory);
  }
    loadQuiz(){
      this.router.navigate(['/quiz']);
    }

  }
