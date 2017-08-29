import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    DemoSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
