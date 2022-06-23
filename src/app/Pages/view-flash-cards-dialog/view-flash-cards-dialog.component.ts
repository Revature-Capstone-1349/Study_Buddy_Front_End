import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IDialogData } from '../view-flash-cards/view-flash-cards.component';


@Component({
  selector: 'app-view-flash-cards-dialog',
  templateUrl: './view-flash-cards-dialog.component.html',
  styleUrls: ['./view-flash-cards-dialog.component.css']
})
export class ViewFlashCardsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewFlashCardsDialogComponent>, @Inject(MAT_DIALOG_DATA) public dialogData: any) {
    console.log(dialogData)
  }

  ngOnInit(): void {
  }

   
  

}
