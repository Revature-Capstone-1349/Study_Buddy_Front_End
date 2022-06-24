import { NgModule } from '@angular/core';
<<<<<<< Updated upstream
import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './timer/timer/timer.component';
import { CreateTimerComponent } from './timer/create-timer/create-timer.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'creattimer', component: CreateTimerComponent },
  { path: 'timer', component: TimerComponent}
]
=======
import { Router, RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './Components/timer/timer.component';
import { LoginComponent } from "./Components/login/login.component";
import { RegisterComponent } from "./Components/register/register.component";
import { ErrorPageComponent } from "./Pages/error-page/error-page.component";
import { HomePageComponent } from "./Pages/home-page/home-page.component";



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: ErrorPageComponent }
];
>>>>>>> Stashed changes

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
