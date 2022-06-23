import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logger: boolean = true;
  constructor(private cookie: CookieService) { }

  ngOnInit(): void {
    this.logger = this.cookie.check("userId")
  }

  // onCartClk(){
  //   //console.log("works")
  //   if(this.cookie.check("CartDisplay")){
  //     if(this.cookie.get("CartDisplay") == "true"){
  //       this.cookie.set("CartDisplay", "false");
  //     }
  //     else{
  //       this.cookie.set("CartDisplay", "true");
  //       }
  //   }
  //   else{
  //     this.cookie.set("CartDisplay", "false")
  //   }
  //    console.log(this.cookie.get("CartDisplay"))
  // }

}
