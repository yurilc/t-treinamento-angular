import { Component, OnInit } from '@angular/core';
import { Account } from '../account.model';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  contas = [
    new Account(1234, 99123, 'Conta Corrente', 120),
    new Account(1234, 12121, 'Conta Poupança', 710)
  ];

  contaSelecionada: Account;

  constructor() { }

  ngOnInit() {
  }

  onSelectAccount(conta: Account) {
    this.contaSelecionada = conta;
  }

  onAccountSaved(conta: Account) {
    console.log('AccountListComponent:',conta);
  }

}
