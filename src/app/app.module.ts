import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Modules/material/material.module';
import { AddNotesComponent } from './Components/add-notes/add-notes.component';
import { AddFlashCardComponent } from './Components/add-flash-card/add-flash-card.component';
import { ViewNotesComponent } from './Pages/view-notes/view-notes.component';
import { ViewFlashCardsComponent } from './Pages/view-flash-cards/view-flash-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNotesComponent,
    AddFlashCardComponent,
    ViewNotesComponent,
    ViewFlashCardsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
