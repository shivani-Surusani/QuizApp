import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, ROUTES, Router, RouterStateSnapshot, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { appRoutes } from './routes';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultService } from './service/result.service';
import { homeService } from './service/home.service';
import { loginService } from './service/login.service';
import { AngularWebStorageModule } from 'angular-web-storage';
import { ErrorComponent } from './error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    QuizComponent,
    ResultComponent,
    RegisterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AngularWebStorageModule
  ],
  providers: [ResultService,homeService,loginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
