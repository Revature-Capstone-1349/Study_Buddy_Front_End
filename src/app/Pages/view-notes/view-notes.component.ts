import { Component, OnInit } from '@angular/core';
import { notes } from 'src/app/Model/notes';

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.css']
})
export class ViewNotesComponent implements OnInit {

  noteContent = new notes("Title", "Category", "Content");
  editModeOn = false;

  constructor() { }

  ngOnInit(): void {
  }

  ToggleEdit(){
    this.editModeOn = !this.editModeOn;
  }

  ngSubmitHandler(){
    console.log(this.noteContent)
  }

}
