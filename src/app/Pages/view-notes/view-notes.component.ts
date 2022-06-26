import { Component, OnInit } from '@angular/core';
import { notes } from 'src/app/Model/notes';

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.css']
})
export class ViewNotesComponent implements OnInit {


  noteList : notes[] = [
    new notes("Title", "Category", "Content"),
    new notes("Title2", "Category2", "Content2"),
    new notes("Title3", "Category3", "Content3"),
    new notes("Title4", "Category4", "Content4"),
    new notes("Title5", "Category5", "Content5"),
    new notes("Title6", "Category6", "Content6"),
    new notes("Title7", "Category7", "Content7"),
    new notes("Title8", "Category8", "Content8")
  ]
  noteEditList : notes[] = [
    new notes("Title", "Category", "Content"),
    new notes("Title2", "Category2", "Content2"),
    new notes("Title3", "Category3", "Content3"),
    new notes("Title4", "Category4", "Content4"),
    new notes("Title5", "Category5", "Content5"),
    new notes("Title6", "Category6", "Content6"),
    new notes("Title7", "Category7", "Content7"),
    new notes("Title8", "Category8", "Content8")
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

    this.noteEditList[id].category = this.noteList[id].category
    this.noteEditList[id].title = this.noteList[id].title
    this.noteEditList[id].content = this.noteList[id].content
    
    // console.log("Edit list " + this.noteEditList[id].category)  
  }

  ngSubmitHandler(i:number){
    this.editList[i] = !this.editList[i]
    this.noteList[i].category = this.noteEditList[i].category
    this.noteList[i].content = this.noteEditList[i].content
    this.noteList[i].title = this.noteEditList[i].title
    console.log(this.noteList[i])
  }

  

}
