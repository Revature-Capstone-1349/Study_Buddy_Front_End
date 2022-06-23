import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './timer/timer/timer.component';
import { CreateTimerComponent } from './timer/create-timer/create-timer.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'creattimer', component: CreateTimerComponent },
  { path: 'timer', component: TimerComponent}
]

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
