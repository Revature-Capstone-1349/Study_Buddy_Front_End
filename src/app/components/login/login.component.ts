import { Component, OnInit } from '@angular/core';
import { HttpBackend } from '@angular/common/http';
import { User } from 'src/app/Model/user';
import { AuthService } from 'src/app/Service/auth.service';
import { SessionsService } from 'src/app/Service/sessions.service';


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
    private authService: AuthService,
    private cookieSession: SessionsService
  ) { }

  ngOnInit(): void {
  }

  onSubmitHandler(data: any) {
    this.user = data;
    this.authService.login(this.user).subscribe(response => {
      if (response !== null) {
        this.cookieSession.createSession("userAccount", response)
        this.user = this.cookieSession.getSession("userAccount")
      } else {
        this.display = true;
      }

    })

  }

}
