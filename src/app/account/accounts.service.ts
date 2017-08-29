import { Injectable, EventEmitter } from '@angular/core';

import { Account } from './account.model';
import { LoggingService } from "../shared/logging.service";

@Injectable()
export class AccountsService {
    private accounts = [
        new Account(1234, 99123, 'Conta Corrente', 120),
        new Account(1234, 12121, 'Conta Poupança', -710)
    ];

    accountsUpdated = new EventEmitter<Account[]>();

    constructor(private loggingService:LoggingService) {}

    getAccounts() {
        return this.accounts.slice();
    }

    getAccount(index: number) {
        this.loggingService.log('Get Account');
        return this.accounts[index];
    }

    save(account: Account) {
        this.accounts.push(account);
        this.accountsUpdated.next(this.getAccounts());
    }

    update(index: number, account: Account) {
        this.accounts[index] = account;
        this.accountsUpdated.next(this.getAccounts());
    }
}