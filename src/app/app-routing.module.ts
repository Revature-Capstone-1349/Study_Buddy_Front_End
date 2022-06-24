import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TimerComponent } from './Components/timer/timer.component';
import { CreateTimerComponent } from './Components/create-timer/create-timer.component';
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
  { path: 'creattimer', component: CreateTimerComponent },
  { path: 'timer', component: TimerComponent},
  { path: '**', component: ErrorPageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
