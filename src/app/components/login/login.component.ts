import { Component, OnInit } from '@angular/core';
import { HttpBackend } from '@angular/common/http';
import { User } from 'src/app/Model/user';
import { SessionsService } from 'src/app/Service/sessions.service';
import { UserDataService } from 'src/app/Service/user-data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hidePass = true;
  user: User = new User();
  display = false;

  constructor(
    private userDataService: UserDataService,
    private sessionsService: SessionsService
  ) { }

  ngOnInit(): void {
    this.sessionsService.checkLoggedInActive()
  }

  onSubmitHandler(data: any) {
    console.log(data);
    (data.email != "" || data.email != undefined)? this.user.email = data.email : "";
    (data.password != "" || data.password != undefined)? this.user.passwd = data.password : "";
    this.userDataService.login(this.user).subscribe(response => {
      if (response !== null) {
        this.sessionsService.createSession("userAccount", response)
        this.user = this.sessionsService.getSession("userAccount")
      } else {
        this.display = true;
      }

    })

  }

}
