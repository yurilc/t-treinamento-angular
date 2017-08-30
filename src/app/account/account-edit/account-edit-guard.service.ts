import { CanDeactivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AccountEditComponent } from "./account-edit.component";

export interface CanDeactivateAccount {
    canDeactivate(): boolean;
}

export class AccountEditGuard
    implements CanDeactivate<CanDeactivateAccount> {

    canDeactivate(component: CanDeactivateAccount,
                  route: ActivatedRouteSnapshot,
                  router: RouterStateSnapshot):
                  Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}