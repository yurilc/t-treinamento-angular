import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  selectedIndex: number = null;

  limit = 4;

  constructor(private accountsService: AccountsService,
              private router: Router) { }

  ngOnInit() {
    this.contas = this.accountsService.getAccounts();
    this.accountsService.accountsUpdated.subscribe(
      (contas: Account[]) => this.contas = contas
    );
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

  onNovaConta(){
    this.router.navigate(['/accounts', 'new']);
  }

  onDetail(index: number) {
    this.router.navigate(['/accounts', index], {
      preserveFragment: true
    });
  }

}
