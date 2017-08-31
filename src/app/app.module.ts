import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServiceListComponent } from './services/service-list/service-list.component';
import { ServiceEditComponent } from './services/service-edit/service-edit.component'
import { DemoSwitchComponent } from './demo-switch/demo-switch.component';
import { LoggingService } from "./shared/logging.service";
import { ServicesService } from "./services/services.service";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from "./app-routing.module";
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth-guard.service";
import { AccountEditGuard } from "./account/account-edit/account-edit-guard.service";
import { UserFormComponent } from './auth/user-form/user-form.component';
import { LoginComponent } from './auth/login/login.component';
import { AccountModule } from "./account/account.module";
import { SharedModule } from "./shared/shared.module";



@NgModule({
  declarations: [
    AppComponent,
    ServiceListComponent,
    ServiceEditComponent,
    DemoSwitchComponent,
    PageNotFoundComponent,
    UserFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AccountModule,
    SharedModule
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
