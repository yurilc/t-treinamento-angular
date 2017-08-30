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

  canEdit: boolean;
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
      this.route.fragment.subscribe(
        (fragment: string) => {
          this.canEdit = fragment === 'can-edit';
        }
      );
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onShowTransactions(){
    this.router.navigate(['transactions'], {
      relativeTo: this.route,
      queryParams: {
        'start': '2017-08-01',
        'end': '2017-08-31'
      }
    });
  }
}
