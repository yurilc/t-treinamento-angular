import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AccountEditComponent } from './account/account-edit/account-edit.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { ServiceListComponent } from './services/service-list/service-list.component';
import { ServiceEditComponent } from './services/service-edit/service-edit.component'
import { NegativeHighlightDirective } from "./shared/negative-highlight.directive";
import { HighlightDirective } from './shared/highlight.directive';
import { DelayDirective } from './shared/delay.directive';
import { DemoSwitchComponent } from './demo-switch/demo-switch.component';
import { ReversePipe } from "./shared/reverse.pipe";
import { ResumePipe } from "./shared/resume.pipe";
import { LoggingService } from "./shared/logging.service";
import { ServicesService } from "./services/services.service";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from "./app-routing.module";
import { AccountDetailComponent } from './account/account-detail/account-detail.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth-guard.service";
import { AccountEditGuard } from "./account/account-edit/account-edit-guard.service";



@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountEditComponent,
    AccountListComponent,
    ServiceListComponent,
    ServiceEditComponent,
    NegativeHighlightDirective,
    HighlightDirective,
    DelayDirective,
    DemoSwitchComponent,
    ReversePipe,
    ResumePipe,
    PageNotFoundComponent,
    AccountDetailComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    LoggingService,
    ServicesService,
    AuthService,
    AuthGuard,
    AccountEditGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
