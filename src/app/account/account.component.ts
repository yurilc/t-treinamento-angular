import { Component } from '@angular/core';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html'
})
export class AccountComponent {

    agencia = '1234';
    conta: string = '0003212';
    tipo = 'Conta Corrente';
    saldo: number = 120.00;
}