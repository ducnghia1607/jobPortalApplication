import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loginAccount: any;
  isLoggedIn!: boolean;
  isEmployer!: boolean;
  userRole!: string;

  constructor(private loginService: LoginService) {
    const local = JSON.parse(localStorage.getItem('loginAccount') as string);
    console.log(local, '#First reload');
    if (local) {
      this.isLoggedIn = true;
      this.loginService.isLoggedIn.next(this.isLoggedIn);
      // this.userRole = local.userRole;
      // if (this.userRole == 'Employer') {
      //   this.isEmployer = true;
      // } else this.isEmployer = false;
    } else {
      this.isLoggedIn = false;
      this.isEmployer = false;
    }
  }

  ngOnInit(): void {
    console.log(this.isLoggedIn);

    this.loginService.isLoggedIn.subscribe((val) => {
      this.isLoggedIn = val;
      if (this.isLoggedIn) {
        const local = JSON.parse(
          localStorage.getItem('loginAccount') as string
        );
        this.userRole = local.userRole;
        this.loginAccount = local;

        if (this.userRole == 'Employer') {
          this.isEmployer = true;
        } else this.isEmployer = false;
      }
    });
  }

  logout() {
    localStorage.removeItem('loginAccount');
    this.userRole = '';
    this.isLoggedIn = false;
    this.isEmployer = false;
    this.loginService.isLoggedIn.next(this.isLoggedIn);
  }
}
