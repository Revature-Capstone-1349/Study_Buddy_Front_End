import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { CreateTimerComponent } from './create-timer/create-timer.component';



@NgModule({
  declarations: [
    TimerComponent,
    CreateTimerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TimerModule { }
