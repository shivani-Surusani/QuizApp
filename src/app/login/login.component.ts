import { Component, OnInit } from '@angular/core';
import { unwrapResolvedMetadata } from '@angular/compiler';
import { login } from '../models/login';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  arrlogin: login [];
  username: string='';
  password:string='';
  uname: string[];
  constructor(private httpService: HttpClient, private router: Router) { }

  ngOnInit() {
  
  this.httpService.get('./assets/login.json').subscribe(
    data => {
      this.arrlogin = data as login [];	 // FILL THE ARRAY WITH DATA.
      
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
  );
  }
set(event){
  var x=event.target;
    this.username=x.value;
}
verify(){
  {
    console.log(this.username);
    console.log(typeof this.username);
    this.router.navigate(['/home']);
    /*
    for (let i = 0; i < 4; i++) {
           //console.log(this.arrlogin[i].uname);
            if(this.username == this.arrlogin[i].uname){
            console.log(this.arrlogin[i]);
            console.log(typeof this.arrlogin[i]);
            
              }
            else{
               this.router.navigate(['../login']); 
              }
            }  
                 

*/
}}}

