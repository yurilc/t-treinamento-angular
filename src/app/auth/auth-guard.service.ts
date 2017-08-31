import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot,
                routerState: RouterStateSnapshot ):
                    Observable<boolean> | Promise<boolean> | boolean {
        return new Promise<boolean>( (resolve, reject) => {
            resolve(this.authService.isLoggedIn());
        });
    }

    canActivateChild(route: ActivatedRouteSnapshot,
        routerState: RouterStateSnapshot ):
            Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, routerState);
    }
}