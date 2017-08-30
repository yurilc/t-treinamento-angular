import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Account } from '../account.model';
import { AccountsService } from "../accounts.service";

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  conta: Account = new Account();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private accountsService: AccountsService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const index = params['id'];
        const conta = this.accountsService.getAccount(index);
        if(conta) {
          this.conta = conta;
        } else {
          this.router.navigate(['/accounts']);
        }
      });
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
