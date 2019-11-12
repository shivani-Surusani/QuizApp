import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ResultService {

  private ResultSource = new BehaviorSubject(0);
  currentResult = this.ResultSource.asObservable();
  private RS = new BehaviorSubject(0);
  CR = this.RS.asObservable();
  constructor() { }

  changeResult(result: number) {
    this.ResultSource.next(result)
  }
  changewrong(r: number) {
    this.RS.next(r);
  }

}