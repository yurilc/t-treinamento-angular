import { Component, OnChanges, OnInit, Input, Output, EventEmitter,
          ViewChild, ElementRef, DoCheck,
          AfterContentInit, OnDestroy, Renderer2 } from '@angular/core';
import { Account } from '../account.model';
import { AccountsService } from "../accounts.service";

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements 
  OnChanges, OnInit, DoCheck,
  AfterContentInit, OnDestroy {

  conta: Account;

  @Input('index') index: number;

  //@Output() accountSaved = new EventEmitter<Account>();

  @ViewChild('agencia') agenciaFormGroup: ElementRef;
  @ViewChild('saldo') saldoFormGroup: ElementRef;

  constructor(private renderer: Renderer2,
              private accountsService: AccountsService) { }

  ngOnChanges() {
    if(this.index != null) {
      const conta = this.accountsService.getAccount(this.index);
      this.conta = new Account(
        conta.agencia,
        conta.conta,
        conta.tipo,
        conta.saldo
      );
    } else {
      this.conta = new Account(0, 0, '', 0);
    }
    console.log(this.renderer);
    if(this.conta.saldo < 0) {
      this.renderer.addClass(
        this.saldoFormGroup.nativeElement,
        'has-error'
      );
    } else {
      this.renderer.removeClass(
        this.saldoFormGroup.nativeElement,
        'has-error'
      );
    }
      //this.saldoFormGroup.nativeElement.className = 'form-group has-error';
  }

  log() {
    console.log(this.conta.saldo);
  }

  ngOnInit() {
    //this.agenciaFormGroup.nativeElement.className = 'form-group has-error';
    console.log('OnInit');
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
