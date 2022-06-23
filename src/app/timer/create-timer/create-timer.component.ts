import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/timer.service';




@Component({
  selector: 'app-create-timer',
  templateUrl: './create-timer.component.html',
  styleUrls: ['./create-timer.component.css']

})
export class CreateTimerComponent implements OnInit {
 
  

    constructor(public timerService: TimerService ) { }

  ngOnInit(): void {
  }

  createTimer(){ 
    this.timerService.studyHours;
    this.timerService.studyMinutes;
    this.timerService.studySeconds;
    this.timerService.breakHours;
    this.timerService.breakMinutes;
    this.timerService.breakSeconds;
   }

}
