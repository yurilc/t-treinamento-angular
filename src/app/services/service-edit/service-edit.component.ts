import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";

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
    'name': new FormControl(null, Validators.required),
    'value': new FormControl(null, [
      Validators.required,
      Validators.min(0)
    ])
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

}
