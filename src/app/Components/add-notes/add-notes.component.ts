import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//Add a onclick function for creating the note
onSubmitHandler(formData:any){
  console.log("Form was submitted");
  console.log(formData);
}
}
