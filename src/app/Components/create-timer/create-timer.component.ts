import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TimerService } from 'src/app/timer.service';
import { TimerComponent } from '../timer/timer.component';




@Component({
  selector: 'app-create-timer',
  templateUrl: './create-timer.component.html',
  styleUrls: ['./create-timer.component.css']

})
export class CreateTimerComponent implements OnInit {
 
  

    constructor(public timerService: TimerService,
      public dialogRef: MatDialogRef<TimerComponent>, 
      ) { }

  ngOnInit(): void {
  }

  createTimer(){ 
    (this.timerService.studyHours === undefined || this.timerService.studyHours === null)? this.timerService.studyHours = 0 : "";
    (this.timerService.studyMinutes === undefined || this.timerService.studyMinutes === null)? this.timerService.studyMinutes = 0 : "";
    (this.timerService.studySeconds === undefined || this.timerService.studySeconds === null)? this.timerService.studySeconds = 0 : "";
    (this.timerService.breakHours === undefined || this.timerService.breakHours === null)? this.timerService.breakHours = 0 : "";
    (this.timerService.breakMinutes === undefined || this.timerService.breakMinutes === null)? this.timerService.breakMinutes = 0 : "";
    (this.timerService.breakSeconds === undefined || this.timerService.breakSeconds === null)? this.timerService.breakSeconds = 0 : "";
    (this.timerService.studyHours > 59 )? this.timerService.studyHours = 59 : "";
    (this.timerService.studyMinutes > 59 )? this.timerService.studyMinutes = 59 : "";
    (this.timerService.studySeconds > 59 )? this.timerService.studySeconds = 59 : "";
    (this.timerService.breakHours > 59 )? this.timerService.breakHours = 59 : "";
    (this.timerService.breakMinutes > 59 )? this.timerService.breakMinutes = 59 : "";
    (this.timerService.breakSeconds > 59 )? this.timerService.breakSeconds = 59 : "";    
    (this.timerService.studyHours < 0 )? this.timerService.studyHours = 0 : "";
    (this.timerService.studyMinutes < 0 )? this.timerService.studyMinutes = 0 : "";
    (this.timerService.studySeconds < 0 )? this.timerService.studySeconds = 0 : "";
    (this.timerService.breakHours < 0 )? this.timerService.breakHours = 0 : "";
    (this.timerService.breakMinutes < 0 )? this.timerService.breakMinutes = 0 : "";
    (this.timerService.breakSeconds < 0 )? this.timerService.breakSeconds = 0 : "";
    this.timerService.setTimer(this.timerService.studyHours, this.timerService.studyMinutes, this.timerService.studySeconds)
    this.dialogRef.close();
   }
}
