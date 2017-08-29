import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: '', redirectTo: '/accounts', pathMatch: 'full' },
  { path: 'accounts', component: AccountListComponent, children: [
    { path: ':id/edit', component: AccountEditComponent },
    { path: 'new', component: AccountEditComponent }
  ] },
  { path: 'services', component: ServiceListComponent, children: [
    { path: ':id/edit', component: ServiceEditComponent },
    { path: 'new', component: ServiceEditComponent }
  ] },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    LoggingService,
    ServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
