import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router,
              private authService: AuthService) {}

  onLoadContas() {
    this.router.navigate(['/accounts'], {
      fragment: 'can-edit'
    });
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
