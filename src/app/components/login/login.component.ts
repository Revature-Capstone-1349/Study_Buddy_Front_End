import { Component, OnInit } from '@angular/core';
import { HttpBackend } from '@angular/common/http';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/Services/auth.service';


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
    private authService: AuthService) { }

  ngOnInit(): void {
  }
  
  onSubmitHandler(data: any){
    this.user = data;
    this.authService.login(this.user).subscribe(response => {

    })

  }


}
