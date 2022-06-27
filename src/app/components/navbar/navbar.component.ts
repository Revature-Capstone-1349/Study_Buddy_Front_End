import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SessionsService } from 'src/app/Service/sessions.service';
import { Router } from '@angular/router';
import { HttpBackend } from '@angular/common/http';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any;
  logger: boolean = false;
  call = this.checkLogger();

  constructor(private sessionService: SessionsService) { }
            


  ngOnInit(): void {
    this.checkLogger()
  }

  checkLogger(){
    if(this.sessionService.checkLoggedInActive()){
      this.user = this.sessionService.getSession("userAccount")
    }else
    this.logger = false
  }

  onClickLogout(){
    this.sessionService.logout();
  }
  
}