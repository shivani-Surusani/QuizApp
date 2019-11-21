import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable()
export class homeService {

  private categorySource = new BehaviorSubject('default message');
  currentcategory = this.categorySource.asObservable();

  constructor(private http: HttpClient) { }

  changecat(cat: string) {
    this.categorySource.next(cat)
  }

  getquiz(area){
    console.log('inside home service');
    console.log(area);
    let params = new HttpParams();
    params = params.append('area', area);
    return this.http.get('http://localhost:4200/api/v1/endpoint2/',{params: params, withCredentials: true});
  }

}