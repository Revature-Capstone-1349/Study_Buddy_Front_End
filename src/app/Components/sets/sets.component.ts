import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SetsService } from 'src/app/Service/sets.service';
import { UserDataService } from 'src/app/Service/user-data.service';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.css']
})
export class SetsComponent implements OnInit {
  currentUser = 1;
  currentSet: any[] = []
  notifierSubscription: Subscription = this.setsSession.subjectNotifier.subscribe(notified => {
    this.setsSession.setsByUserIdAndPublic(this.currentUser).subscribe({
      next: (res) =>{
        this.currentSet = res
      }
    })
  });

  constructor(private setsSession: SetsService, private userSession: UserDataService) { }

  ngOnInit(): void {
    this.setsSession.setsByUserIdAndPublic(this.currentUser).subscribe({
      next: (res) =>{
        this.currentSet = res
      }
    })
  }


}
