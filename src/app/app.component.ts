import { Component } from '@angular/core';
import { DrawerService } from './Service/drawer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'Study_Buddy_Front_End';
  showFiller = false;
=======

  constructor(private drawerService: DrawerService){}

  public get hideDrawer():boolean{
    return this.drawerService.isExpanded;
  }
>>>>>>> e255564daddc2d1d86c65d8cff2f2b043d02283e
}
