import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient,HttpParams } from '@angular/common/http'
import { login } from '../models/login'
@Injectable()
export class loginService {
  
    constructor(private http: HttpClient) {}

  getvalidation(user) {
    console.log('inside service');
    console.log(user);
    let params = new HttpParams();
    params = params.append('username', user.username);
    params = params.append('password', user.password);
    return this.http.get('http://localhost:4200/api/v1/endpoint1/',{params: params, withCredentials: true});
 
  }
}