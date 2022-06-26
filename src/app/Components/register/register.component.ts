import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { AuthService } from 'src/app/Service/auth.service';
import { UserDataService } from 'src/app/Service/user-data.service';
// import { SessionsService } from 'src/app/services/sessions.service';
// import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hidePass = true;
  user = new User();
  display = false;
  registerStatus: boolean = false;

  constructor(
    private userService: UserDataService
  ) { }

  ngOnInit(): void {
    
  }

  onSubmitHandler(){
     if (this.user.name !== undefined
      || this.user.email !== undefined 
      || this.user.passwd !== undefined){
        this.userService.register(this.user).subscribe(response => {
          this.registerStatus = response;
          if (response){
            // this.router.navigateByUrl("");
          }
          else {
              this.display=true;
            }
        });
      }
  }
}