import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { Sets } from 'src/app/Model/sets';

@Component({
  selector: 'app-flash-card-set',
  templateUrl: './flash-card-set.component.html',
  styleUrls: ['./flash-card-set.component.css']
})
export class FlashCardSetComponent implements OnInit {

  constructor(public dialog: Dialog) { }

  ngOnInit(): void {
  }

  openCreateSetDialog(): void {
    this.dialog.open(AddSetComponentDialog)
  }

}


@Component({
  selector: 'add-set',
  templateUrl: './add-set.component.html',
  styleUrls: ['./add-set.component.css']
})
export class AddSetComponentDialog implements OnInit {
  setItem: Sets = new Sets();
  privacy: boolean = false;

  ngOnInit(): void {
    let userId = 1;
    this.setItem = new Sets(userId);
  }

  constructor(public dialogRef: DialogRef<AddSetComponentDialog>) {

  }

  addSetFormHandler(): void {
    this.setItem.privacy = this.privacy ? 'public' : 'private';
    if (this.setItem.setName != undefined) {
      this.dialogRef.close();
      console.log(this.setItem);
    }
    
  }
}
