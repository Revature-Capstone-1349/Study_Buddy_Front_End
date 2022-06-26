import { inject, Injectable, resolveForwardRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";
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

    /**
     * used to create a new cookie. Name the cookie whatever you want and the data you want it to store.
     * @param cookieName
     * @param data 
     */
    createSession(cookieName: string, data: any) {
        if (cookieName === "userAccount") {
            this.cookieService.set(cookieName, JSON.stringify(data));
            this.cookieService.set("loggedin", "true");
        }
        this.router.navigateByUrl("");
    }

    /**
     * updates the cookie if user is allowed to edit their account details
     */
    updateSession(cookieName: string, data: any) {
        if (cookieName === "userAccount") {
            this.cookieService.set(cookieName, JSON.stringify(data));
        }
        this.router.navigate(['/profile']);
    }

    /**
     * sets any empty stings to null
     */
    userAccountNormalizer(data: User): User {
        (data.name === '' || data.name === null)? data.name = undefined : "";
        (data.email === '' || data.email === null)? data.email = undefined : "";
        (data.passwd === '' || data.passwd === null)? data.passwd = undefined : "";
        (data.id === null)? data.id = undefined : "";
        return data;
    }


    getSession(cookieName: string): any {
        let cookie: any;
        if (cookieName === 'userAccount') {
            cookie = this.userAccountNormalizer(JSON.parse(this.cookieService.get(cookieName)));
            return cookie;
        } else {
            cookie = JSON.parse(this.cookieService.get(cookieName))
            return cookie;
        }
    }

    logout() {
        this.cookieService.deleteAll();
        this.router.navigateByUrl("")
    }

    /**
     * if user is logged in this will redirect the user to root/homepage.
     */
    sessionActive() {
        this.checkSession = this.checkLoggedInActive();
        (this.checkSession == true)? this.loggedInDirector() : (this.checkSession === false)? this.loggedOutDirector() : "";
    }

    /**
     * returns a boolean to see if you're logged in.
     */
    checkLoggedInActive(): boolean {
        return this.cookieService.check("loggedin")
    }

    /**
     * if user logged in redirect user to root/homepage.
     */
    loggedInDirector() {
        (this.checkLoggedInActive() == true)? this.router.navigateByUrl("") : "";
    }

    /**
     * if user logged out redirect to root/homepage.
     */
    loggedOutDirector() {
        (this.checkLoggedInActive() === false)? this.router.navigateByUrl("") : "";
    }

    /**
     * if user logged out redirect to homepage.
     */
    checkCookieActive(cookieName: string): boolean {
        return this.cookieService.check(cookieName);
    }

    reloadCurrentPage() {
        window.location.reload();
    }
}
