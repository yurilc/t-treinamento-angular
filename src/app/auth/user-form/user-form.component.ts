import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from "../auth.service";

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

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    const value = this.form.value;
    this.authService.registerUser(
      value.email,
      value.password
    );
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
