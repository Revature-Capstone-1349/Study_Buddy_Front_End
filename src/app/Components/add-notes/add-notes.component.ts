import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { notes } from 'src/app/Model/notes';
import { NotesService } from 'src/app/Service/notes.service';
import { SessionsService } from 'src/app/Service/sessions.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {

  note = new notes()

  constructor(
    private session: SessionsService,
    private noteService: NotesService,
    private snack: MatSnackBar
    ) { }

  ngOnInit(): void {
  }
//Add a onclick function for creating the note
onSubmitHandler(){
  console.log("Form was submitted");
  console.log();
  this.noteService.addNote(this.note).subscribe(response =>{
    console.log(response)
    this.snack.open("Your note has been added")
  })
  
}
}
