import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../account.model';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {

  @Input('account') conta: Account = new Account(0, 0, '', 0);

  @Output() accountSaved = new EventEmitter<Account>();

  constructor() { }

  ngOnInit() {
  }

  onSave() {
    this.accountSaved.next(this.conta);
  }
}
