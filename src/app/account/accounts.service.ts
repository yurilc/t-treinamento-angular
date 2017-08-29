import { Account } from './account.model';

export class AccountsService {
    private accounts = [
        new Account(1234, 99123, 'Conta Corrente', 120),
        new Account(1234, 12121, 'Conta Poupança', -710)
    ];

    getAccounts() {
        return this.accounts.slice();
    }

    getAccount(index: number) {
        return this.accounts[index];
    }
}