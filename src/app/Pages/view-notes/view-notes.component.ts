import { Component, OnInit } from '@angular/core';
import { notes } from 'src/app/Model/notes';

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.css']
})
export class ViewNotesComponent implements OnInit {
  userId: number = 1

  noteList : notes[] = [
    new notes(this.userId, "Title", "Category", "Content"),
    new notes(this.userId, "Title2", "Category2", "Content2"),
    new notes(this.userId, "Title3", "Category3", "Content3"),
    new notes(this.userId, "Title4", "Category4", "Content4"),
    new notes(this.userId, "Title5", "Category5", "Content5"),
    new notes(this.userId, "Title6", "Category6", "Content6"),
    new notes(this.userId, "Title7", "Category7", "Content7"),
    new notes(this.userId, "Title8", "Category8", "Content8")
  ]
  noteEditList : notes[] = [
    new notes(this.userId, "Title", "Category", "Content"),
    new notes(this.userId, "Title2", "Category2", "Content2"),
    new notes(this.userId, "Title3", "Category3", "Content3"),
    new notes(this.userId, "Title4", "Category4", "Content4"),
    new notes(this.userId, "Title5", "Category5", "Content5"),
    new notes(this.userId, "Title6", "Category6", "Content6"),
    new notes(this.userId, "Title7", "Category7", "Content7"),
    new notes(this.userId, "Title8", "Category8", "Content8")
  ]
  editModeOn = false;
  editList : boolean[] = [];

  constructor() { }

  ngOnInit(): void {
    this.noteList.forEach(element => {
      this.editList.push(false)
    });
  }

  ToggleEdit(id:number){
    // this.editModeOn = !this.editModeOn;
    // console.log(this.editList)
    this.editList[id] = !this.editList[id]
    // console.log("Origin list " + this.noteList[id].category)

    this.noteEditList[id].cat = this.noteList[id].cat
    this.noteEditList[id].title = this.noteList[id].title
    this.noteEditList[id].content = this.noteList[id].content
    
    // console.log("Edit list " + this.noteEditList[id].category)  
  }

  ngSubmitHandler(i:number){
    this.editList[i] = !this.editList[i]
    this.noteList[i].cat = this.noteEditList[i].cat
    this.noteList[i].content = this.noteEditList[i].content
    this.noteList[i].title = this.noteEditList[i].title
    console.log(this.noteList[i])
  }

  

}
