import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class TimerService {

  public title = "Study Timer";

  private break: boolean = false;
  
  public hours: number = 0;
  public minutes: number = 0;
  public seconds : number= 0;
  
  public studyHours: number = 0;
  public studyMinutes: number = 50;
  public studySeconds : number= 0;

  public breakHours: number = 0;
  public breakMinutes: number = 10;
  public breakSeconds : number= 0; 

  private timer: any; 
  private date = new Date();

  public show: boolean = true;
  public disabled: boolean = false;
  public animate: boolean = false;

  constructor(public _snackBar: MatSnackBar){
  }

  setTimer(hours: number, minutes: number, seconds: number) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    //(this.hours <= 0 || this.minutes <= 0 || this.seconds <= 0) ? this.disabled=true : this.disabled=false;
  }

  updateTimer() {
    this.date.setHours(this.hours);
    this.date.setMinutes(this.minutes);
    this.date.setSeconds(this.seconds);
    this.date.setMilliseconds(0);
    
    const time = this.date.getTime(); //use this to store into cookie...
    
    this.date.setTime(time - 1000);

    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();

    if (this.date.getHours() === 0 &&
      this.date.getMinutes() === 0 &&
      this.date.getSeconds() === 0) {
      //stop interval
      clearInterval(this.timer);
     
      this.animate = true;
      setTimeout(() => {
        this.stop();
      
      }, 0);

    }
  }

  start() {
    if (this.hours > 0 || this.minutes > 0 || this.seconds > 0) {

      this.disabled = true;
      this.show = false;  //hide btn + and -
      this.updateTimer();

      if(this.seconds > 0){
        this.timer = setInterval(() => {
          this.updateTimer();
        }, 1000);
      }     
    }
  }
 
  stop() {    
    this.disabled = false;
    this.show = true;
    this.animate = false;
    clearInterval(this.timer);
    this.breakTime();
  }
  
  breakTime(){
    if (this.hours === 0 && this.minutes === 0 && this.seconds === 0 &&
        this.break === false) {
        this.break = true;
        this.title = "Snack Break";
        this.setTimer(this.breakHours, this.breakMinutes, this.breakSeconds);
        this._snackBar.open("You've made it to break time", "Enjoy!");
        this.start();
    } else if (this.hours === 0 && this.minutes === 0 && this.seconds === 0 &&
        this.break === true) {
        this.break = false;
        this.title = "Study Timer";
        this._snackBar.open("Break is over, lets continue", "You can do it!");
        this.setTimer(this.studyHours, this.studyMinutes, this.studySeconds);
        this.start();
    }
  }

  reset() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.stop();
  }
}
