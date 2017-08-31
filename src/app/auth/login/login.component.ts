import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    this.authService.login(
      value.email,
      value.password
    ).then(
      () => {
        this.router.navigate(['/services']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
