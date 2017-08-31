import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { Service } from '../service.model';
import { ServicesService } from "../services.service";

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.css']
})
export class ServiceEditComponent implements OnInit {

  index: number;

  form = new FormGroup({
    'name': new FormControl(null, [
      Validators.required,
      this.validacaoNomesProibidos.bind(this)
    ], this.validacaoNomesProibidosAsync.bind(this)),
    'value': new FormControl(null, [
      Validators.required,
      Validators.min(0)
    ]),
    'items': new FormArray([])
  });

  constructor(private router: Router,
              private route: ActivatedRoute,
              private servicesService: ServicesService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.index = params['id'];
        if(this.index) {
          const service = this.servicesService
            .getService(this.index);
          
            this.form.setControl('items', new FormArray([]));
            
            if(service.items) {
              service.items.forEach(() => {
              this.onAddItem();
            });
          }
          
          this.form.setValue(service);
          /*this.form.setValue({
            'name': '',
            'value': 123
          });
          this.form.patchValue({
            'value': 123
          });*/
        }
      }
    );
  }

  onSave() {
    console.log(this.form.value);
    if(this.index) {
      this.servicesService.update(this.index, this.form.value);
      // this.router.navigate(['../../'], { relativeTo: this.route });
    } else {
      this.servicesService.save(this.form.value);
      // this.router.navigate(['../'], { relativeTo: this.route });
    }
    //this.form.reset();
  }

  validacaoNomesProibidos(control: FormControl):
    {[key: string]: any} {
    if(control.value === 'massagem'){
      return {'nomeProibido': control.value};
    }
    return null;
  }
  
  validacaoNomesProibidosAsync(control: FormControl):
    Promise<{[key: string]: any}> {
    return new Promise<{[key: string]: any}>(
      (resolve, rejext)=>{
        setTimeout(()=> {
          if(control.value === 'texto'){
            resolve({'nomeProibido': control.value});
          } else {
            resolve(null);
          }
        }, 1000);
    })
  }

  onAddItem() {
    (<FormArray>this.form.get('items'))
      .push(new FormControl());
  }

  onRemoveItem(index: number) {
    (<FormArray>this.form.get('items'))
      .removeAt(index);
  }
}
