import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { notes } from 'src/app/Model/notes';
import { User } from 'src/app/Model/user';
import { NotesService } from 'src/app/Service/notes.service';
import { SessionsService } from 'src/app/Service/sessions.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {

  note = new notes(this.session.getSession("userAccount").id)
  user = new User()

  constructor(
    private session: SessionsService,
    private noteService: NotesService,
    private snack: MatSnackBar
    ) {
      console.log(session.getSession("userAccount").id);
     }

  ngOnInit(): void {
  }
//Add a onclick function for creating the note
onSubmitHandler(){
  console.log("Form was submitted");
  console.log(this.session.userAccount.id)
  console.log(this.note);
  this.noteService.addNote(this.note).subscribe(response =>{
    console.log(response)
    this.snack.open("Your note has been added")
  })
  
}
}
