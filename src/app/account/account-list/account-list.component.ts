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
    new Account(1234, 12121, 'Conta Poupança', -710)
  ];

  selectedIndex: number;

  limit = 4;

  constructor() { }

  ngOnInit() {
    //console.log('OnInit');
  }

  onSelectAccount(index: number) {
    this.selectedIndex = index;
  }

  getSelectedAccount(): Account {
    return this.contas[this.selectedIndex];
  }

  onAccountSaved(conta: Account) {
    //this.contas.push(new Account(conta.agencia, conta.conta, conta.tipo, conta.saldo));
    //console.log('AccountListComponent:',conta);
    conta.tipo = 'abc123';
  }

  aumentarLimite() {
    this.limit++;
  }

}
