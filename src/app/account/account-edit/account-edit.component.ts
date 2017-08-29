import { Component, OnChanges, OnInit, Input, Output, EventEmitter,
          ViewChild, ElementRef, DoCheck,
          AfterContentInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Account } from '../account.model';
import { AccountsService } from "../accounts.service";

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements 
  OnInit, OnDestroy {

  conta: Account;

  //@Input('index')
  index: number;

  //@Output() accountSaved = new EventEmitter<Account>();

  @ViewChild('agencia') agenciaFormGroup: ElementRef;
  @ViewChild('saldo') saldoFormGroup: ElementRef;

  constructor(private renderer: Renderer2,
              private accountsService: AccountsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // sincrono
    this.index = this.route.snapshot.params['id'];
    this.loadAccount();

    // assyncrono
    this.route.params.subscribe(
      (params: Params) => {
        this.index = params['id'];
        this.loadAccount();
      }
    );
    // console.log(this.renderer);
    // if(this.conta.saldo < 0) {
    //   this.renderer.addClass(
    //     this.saldoFormGroup.nativeElement,
    //     'has-error'
    //   );
    // } else {
    //   this.renderer.removeClass(
    //     this.saldoFormGroup.nativeElement,
    //     'has-error'
    //   );
    // }
      //this.saldoFormGroup.nativeElement.className = 'form-group has-error';
  }

  loadAccount() {
    if(this.index) {
      this.conta = this.accountsService.getAccount(this.index);
    } else {
      this.conta = new Account(0, 0, '', 0);
    }
  }

  log() {
    console.log(this.conta.saldo);
  }

  ngDoCheck() {
    console.log('DoCheck');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

  onSave() {
    //this.accountSaved.next(this.conta);
    if(this.index != null) {
      this.accountsService.update(this.index, this.conta);
    } else {
      this.accountsService.save(this.conta);
    }
    this.conta = new Account(0, 0, '', 0);
    this.index = null;
  }
}
