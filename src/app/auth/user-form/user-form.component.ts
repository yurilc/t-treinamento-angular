import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  form = new FormGroup({
    'email': new FormControl(null,[
      Validators.required,
      Validators.email
    ]),
    'password': new FormControl(null,[
      Validators.required,
      Validators.minLength(6)
    ]),
    'passwordConf': new FormControl(null,[
      Validators.required,
      Validators.minLength(6),
      this.validarSenhas.bind(this)
    ])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
  }

  validarSenhas(control: FormControl):
    {[key: string]: any} {
      if(control.parent) {
        const password = control.parent.get('password').value
        const passwordConf = control.value;
        if(password !== passwordConf) {
          return { 'diffPassword': true };
        }
      }
      return null;
    }
}
