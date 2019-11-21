import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from './navbar/navbar.component';

import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';

export const appRoutes: Routes = [
  {path: 'login',component : LoginComponent},
  {path: 'navbar', component : NavbarComponent},
  {path: 'home', component : HomeComponent },
  {path: 'quiz', component : QuizComponent},
  {path: 'result', component: ResultComponent},
  {path: 'register', component:RegisterComponent},
  {path: '404', component: ErrorComponent},
  {path: '**', redirectTo: '/404'},

  {path:'', redirectTo:'/login',pathMatch:'full'}
];

