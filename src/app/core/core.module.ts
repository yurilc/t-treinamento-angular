import { NgModule } from '@angular/core';
import { LoggingService } from "../shared/logging.service";
import { ServicesService } from "../services/services.service";
import { AuthService } from "../auth/auth.service";
import { AuthGuard } from "../auth/auth-guard.service";
import { AccountEditGuard } from "../account/account-edit/account-edit-guard.service";

@NgModule({
    providers: [
        LoggingService,
        ServicesService,
        AuthService,
        AuthGuard,
        AccountEditGuard
    ]
})
export class CoreModule {}