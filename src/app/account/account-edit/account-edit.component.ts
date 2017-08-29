import { Component, OnChanges, OnInit, Input, Output, EventEmitter,
          ViewChild, ElementRef, DoCheck,
          AfterContentInit, OnDestroy, Renderer2 } from '@angular/core';
import { Account } from '../account.model';
import { AccountsService } from "../accounts.service";

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css'],
  providers: [AccountsService]
})
export class AccountEditComponent implements 
  OnChanges, OnInit, DoCheck,
  AfterContentInit, OnDestroy {

  conta: Account;

  @Input('index') index: number;

  @Output() accountSaved = new EventEmitter<Account>();

  @ViewChild('agencia') agenciaFormGroup: ElementRef;
  @ViewChild('saldo') saldoFormGroup: ElementRef;

  constructor(private renderer: Renderer2,
              private accountsService: AccountsService) { }

  ngOnChanges() {
    this.conta = this.accountsService.getAccount(this.index);
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
    this.accountSaved.next(this.conta);
  }
}
