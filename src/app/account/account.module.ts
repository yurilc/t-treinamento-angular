import { NgModule } from '@angular/core';
import { AccountComponent } from "./account.component";
import { AccountListComponent } from "./account-list/account-list.component";
import { AccountEditComponent } from "./account-edit/account-edit.component";
import { AccountDetailComponent } from "./account-detail/account-detail.component";
import { FormsModule } from "@angular/forms";
import { AccountRoutingModule } from "./account-routing.module";
import { TransactionListComponent } from "../transaction-list/transaction-list.component";
import { ResumePipe } from "../shared/resume.pipe";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AccountComponent,
        AccountListComponent,
        AccountEditComponent,
        AccountDetailComponent,
        TransactionListComponent
    ],
    imports: [
        FormsModule,
        SharedModule,
        AccountRoutingModule
    ]
})
export class AccountModule {}