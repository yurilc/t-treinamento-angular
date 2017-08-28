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

  onSave() {
    this.tipo = 'Conta Corrente';
    console.log(this.agencia);
    console.log(this.conta);
    console.log(this.tipo);
    console.log(this.saldo);
  }
}
