import { flashcards } from 'src/app/Model/flashcards';
import { Component, Inject, OnInit } from '@angular/core';
import { Dialog, DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';

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

  constructor(public dialog: Dialog) {}
  
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

@Component({
  selector: 'app-view-flash-cards-dialog',
  templateUrl: './view-flash-cards-dialog.component.html',
  styleUrls: ['./view-flash-cards-dialog.component.css']
})
export class ViewFlashCardsDialogComponent implements OnInit {

  constructor(public dialogRef: DialogRef<ViewFlashCardsDialogComponent>, @Inject(DIALOG_DATA) public dialogData: any) {
    console.log(dialogData)
  }

  ngOnInit(): void {
  }

   
  

}

