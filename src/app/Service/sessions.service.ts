import { inject, Injectable, resolveForwardRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";
import { waitForAsync } from '@angular/core/testing';
import { User } from '../Model/user';

@Injectable({
    providedIn: 'root'
})
export class SessionsService {

    checkSession: boolean = false;

    constructor(
        private cookieService: CookieService,
        private router: Router
    ) { }



    createSession(cookieName: string, data: any) {
        if (cookieName === "userAccount") {
            this.cookieService.set(cookieName, JSON.stringify(data));
            this.cookieService.set("loggedin", "true");
        }
        this.reloadCurrentPage();
        this.router.navigateByUrl("/dashboard");
    }

    updateSession(cookieName: string, data: any) {
        if (cookieName === "userAccount") {
            this.cookieService.set(cookieName, JSON.stringify(data));
        }
        this.router.navigate(['/profile']);
    }

    userAccountNormalizer(data: User): User {
        if (data.name === '' || data.name === null)
            data.name = undefined;
        if (data.email === '' || data.email === null)
            data.email = undefined;
        if (data.password === '' || data.password === null)
            data.password = undefined;
        if (data.id === null)
            data.id = undefined;
        return data;
    }


    getSession(cookieName: string): any {
        let cookie: any;
        if (cookieName === 'userAccount') {
            cookie = this.userAccountNormalizer(JSON.parse(this.cookieService.get(cookieName)));
            return cookie;
        }else{
            cookie = JSON.parse(this.cookieService.get(cookieName))
            return cookie;
        }
    }

    logout(){
        this.cookieService.deleteAll();
        this.router.navigateByUrl("/home")
    }


    sessionActive() {
        this.checkSession = this.checkLoggedInActive();
        console.log(this.checkSession = this.checkLoggedInActive())
        if (this.checkSession == true) {
            this.loggedInDirector();
        } else if (this.checkSession === false) {
            this.loggedOutDirector();
        }

    }

    checkLoggedInActive(): boolean {
        return this.cookieService.check("loggedin")
    }

    loggedInDirector() {
        if (this.checkLoggedInActive() == true)
            this.router.navigateByUrl("/dashboard");
    }

    loggedOutDirector() {
        if (this.checkLoggedInActive() === false) {
            this.router.navigateByUrl("/home")
        }
    }

    checkCookieActive(cookieName: string): boolean {
        return this.cookieService.check(cookieName);
    }

    reloadCurrentPage() {
        window.location.reload();
    }

}
