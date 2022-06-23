import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';



@Component({
  selector: 'app-create-timer',
  templateUrl: './create-timer.component.html',
  styleUrls: ['./create-timer.component.css']

})
export class CreateTimerComponent implements OnInit {
 
    constructor() { }

  ngOnInit(): void {
  }

  createTimer(){ }

}
