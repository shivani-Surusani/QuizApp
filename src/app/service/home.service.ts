import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class homeService {

  private categorySource = new BehaviorSubject('default message');
  currentcategory = this.categorySource.asObservable();

  constructor() { }

  changecat(cat: string) {
    this.categorySource.next(cat)
  }

}