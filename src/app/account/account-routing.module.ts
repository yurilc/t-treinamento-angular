import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../auth/auth-guard.service";
import { AccountEditComponent } from "./account-edit/account-edit.component";
import { AccountEditGuard } from "./account-edit/account-edit-guard.service";
import { AccountDetailComponent } from "./account-detail/account-detail.component";
import { TransactionListComponent } from "../transaction-list/transaction-list.component";
import { AccountListComponent } from "./account-list/account-list.component";

const routes: Routes = [
  { path: '', component: AccountListComponent,
  canActivateChild: [AuthGuard],
  children: [
    { 
      path: ':id/edit',
      component: AccountEditComponent,
      canActivate: [AuthGuard],
      canDeactivate: [AccountEditGuard]
    },
    { path: 'new', component: AccountEditComponent },
    { path: ':id', component: AccountDetailComponent, children: [
      { path: 'transactions', component: TransactionListComponent },
    ] }
  ] }];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ], exports: [
        RouterModule
    ]
})
export class AccountRoutingModule {
    
}