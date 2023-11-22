import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employer } from '../model/employer.model';
import { Jobseeker } from '../model/jobseeker.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl = 'https://freeapi.miniprojectideas.com/api/JobPortal/';
  loginUrl = 'https://freeapi.miniprojectideas.com/api/JobPortal/login';

  isLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {}

  addNewEmployer(employer: Employer) {
    return this.http.post<Employer>(this.baseUrl + 'AddNewEmployer', employer);
  }

  addNewJobseeker(jobseeker: Jobseeker) {
    return this.http.post<Jobseeker>(
      this.baseUrl + 'AddNewJobSeeker',
      jobseeker
    );
  }

  login(account: any) {
    return this.http.post<any>(this.loginUrl, account);
  }
}
