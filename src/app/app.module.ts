import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AccountEditComponent } from './account/account-edit/account-edit.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { ServiceListComponent } from './services/service-list/service-list.component'

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountEditComponent,
    AccountListComponent,
    ServiceListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
