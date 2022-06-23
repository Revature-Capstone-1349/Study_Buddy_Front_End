import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './timer/timer/timer.component';
import { CreateTimerComponent } from './timer/create-timer/create-timer.component';
import { AppComponent } from './app.component';
import { LoginComponent } from "./Components/login/login.component";
import { RegisterComponent } from "./Components/register/register.component";
import { ErrorPageComponent } from "./Pages/error-page/error-page.component";
import { HomePageComponent } from "./Pages/home-page/home-page.component";



const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'creattimer', component: CreateTimerComponent },
  { path: 'timer', component: TimerComponent },
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
