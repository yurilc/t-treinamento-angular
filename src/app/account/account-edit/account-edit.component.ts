import { Component, OnChanges, OnInit, Input, Output, EventEmitter,
          ViewChild, ElementRef, DoCheck,
          AfterContentInit, OnDestroy } from '@angular/core';
import { Account } from '../account.model';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements 
  OnChanges, OnInit, DoCheck,
  AfterContentInit, OnDestroy {

  @Input('account') conta: Account = new Account(0, 0, '', 0);

  @Output() accountSaved = new EventEmitter<Account>();

  @ViewChild('agencia') agenciaFormGroup: ElementRef;

  constructor() { }

  ngOnChanges() {
    console.log('OnChanges');
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
