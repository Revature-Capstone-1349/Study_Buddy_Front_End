import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
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
