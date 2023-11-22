import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoggedIn = false;
  account = {
    UserName: '',
    Password: '',
  };
  constructor(
    private loginService: LoginService,
    private toast: NgToastService,
    private router: Router
  ) {}
  login() {
    console.log(this.account);
    this.loginService.login(this.account).subscribe((res) => {
      if (res.data) {
        console.log(res);
        localStorage.setItem('loginAccount', JSON.stringify(res.data));
        this.isLoggedIn = true;

        this.router.navigate(['']);
        this.showSuccess(res.message);
        this.loginService.isLoggedIn.next(true);
      } else {
        this.isLoggedIn = false;
        this.showError(res.message);
        this.loginService.isLoggedIn.next(false);
      }
    });
  }

  showSuccess(message: any) {
    this.toast.success({
      detail: 'Success',
      summary: message,
      duration: 3000,
    });
  }

  showError(error: any) {
    this.toast.error({ detail: 'Error', summary: error, duration: 3000 });
  }
} // class Login
