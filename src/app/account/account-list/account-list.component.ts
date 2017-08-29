import { Component, OnInit } from '@angular/core';
import { Account } from '../account.model';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
  providers: [ AccountsService ]
})
export class AccountListComponent implements OnInit {

  contas: Account[];

  selectedIndex: number;

  limit = 4;

  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.contas = this.accountsService.getAccounts();
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
