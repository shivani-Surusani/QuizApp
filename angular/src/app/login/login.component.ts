import { Component, OnInit } from '@angular/core';
//import { unwrapResolvedMetadata } from '@angular/compiler';
import { login } from '../models/login';
import { HttpClient } from '@angular/common/http';
//import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
//import { HomeComponent } from '../home/home.component'
import { loginService } from '../service/login.service';
import { Inject } from '@angular/core'; 
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  arrlogin: login [];
  user={username:'',
  password:''};
  uname: string[];
  loggedin:Boolean=true;
  constructor(private httpService: HttpClient, private router: Router, private lserv: loginService,public local: LocalStorageService) { }

  ngOnInit() {
    this.loggedin=true;
  }
/*set(event){
  var x=event.target;
    this.user.username=x.value;
    console.log(this.user.password);
}*/
logged(){
  return !this.loggedin;
}
verify(){
  {
    x:Boolean;
    console.log(this.user.username);
    console.log(this.user.password);
    this.lserv.getvalidation(this.user).subscribe(
      data => {
        console.log('This is login component')
        
        console.log(data['status']);
        if(data['status']===true){
          this.loggedin=true;
          this.local.set('username',this.user.username);
          console.log(this.loggedin);
          this.router.navigate(['/home']);
        }
        else{
          this.loggedin=false;
          this.local.set('username','');
          console.log(this.loggedin);
          this.router.navigate(['/login']);
        }
      }
    );
 
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

