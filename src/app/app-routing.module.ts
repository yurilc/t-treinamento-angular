import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountEditComponent } from './account/account-edit/account-edit.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { ServiceListComponent } from './services/service-list/service-list.component';
import { ServiceEditComponent } from './services/service-edit/service-edit.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountDetailComponent } from "./account/account-detail/account-detail.component";
import { TransactionListComponent } from "./transaction-list/transaction-list.component";
import { AuthGuard } from "./auth/auth-guard.service";
import { AccountEditGuard } from "./account/account-edit/account-edit-guard.service";
import { UserFormComponent } from './auth/user-form/user-form.component';
import { LoginComponent } from "./auth/login/login.component";
const routes: Routes = [
    { path: '', redirectTo: '/accounts', pathMatch: 'full' },
    { path: 'accounts', loadChildren: './account/account.module#AccountModule' },
    { path: 'services', component: ServiceListComponent, children: [
      { path: ':id/edit', component: ServiceEditComponent, },
      { path: 'new', component: ServiceEditComponent }
    ] },
    { path: 'register', component: UserFormComponent },
    { path: 'login', component: LoginComponent },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
    
}