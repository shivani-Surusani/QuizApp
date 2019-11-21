import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core'; 
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { HttpClient,HttpParams, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username:string='';
  constructor( public local: LocalStorageService,private http: HttpClient, private router: Router ) { }

  ngOnInit() {
    this.username=this.local.get('username');
  }

  logout(){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers,withCredentials: true };
    this.http.post('http://localhost:4200/api/v1/endpoint1/logout',{withCredentials: true}).subscribe(
      data => {
        console.log("Logging out");
        this.router.navigate(['../login']);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
