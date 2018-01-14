import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthService} from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private _authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this._authService.isLoggedin) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }
}
