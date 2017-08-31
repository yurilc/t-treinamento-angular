import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  form = new FormGroup({
    'email': new FormControl(null),
    'password': new FormControl(null)
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
