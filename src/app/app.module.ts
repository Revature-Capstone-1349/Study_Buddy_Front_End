import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Modules/material/material.module';
import { TimerComponent } from './timer/timer/timer.component';
import { CreateTimerComponent } from './timer/create-timer/create-timer.component';
import { TimerService } from './timer.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    CreateTimerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
