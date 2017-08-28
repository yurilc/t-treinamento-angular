import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {

  agencia: number;
  conta: number;
  tipo: string;
  saldo: number;

  constructor() { }

  ngOnInit() {
  }

}
