import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { flashcards } from 'src/app/Model/flashcards';
import { ViewFlashCardsDialogComponent } from '../view-flash-cards-dialog/view-flash-cards-dialog.component';

export class IDialogData{
  constructor(
  definitionData: string
  )
  {}
}

@Component({
  selector: 'app-view-flash-cards',
  templateUrl: './view-flash-cards.component.html',
  styleUrls: ['./view-flash-cards.component.css']
})
export class ViewFlashCardsComponent implements OnInit {

   // Flash Card Dummy Data
  flashCardList: flashcards[] = [
    new flashcards("test1", "This is for testing"),
    new flashcards("test2", "This is for testing"),
    new flashcards("test3", "This is for testing"),
    new flashcards("test4", "This is for testing"),
    new flashcards("test5", "This is for testing"),
    new flashcards("test6", "This is for testing")
  ]

  constructor(public dialog: MatDialog) {}
  
  openDialog(): void {
    // this.dialog.open<string>(ViewFlashCardsDialogComponent)
    // let def = new IDialogData("Definition Data")
    const dialog = this.dialog.open(ViewFlashCardsDialogComponent,{
      data : "Testing"
    })
  }


  
  ngOnInit(): void {
  }


 

}
