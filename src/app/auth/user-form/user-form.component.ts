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
    ])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
