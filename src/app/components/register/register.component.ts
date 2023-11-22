import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isEmployer = false;
  jobseekerForm!: FormGroup;
  employerForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toast: NgToastService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.employerForm = this.fb.group({
      CompanyName: [''],
      EmailId: [''],
      MobileNo: [''],
      PhoneNo: [''],
      CompanyAddress: [''],
      City: [''],
      State: [''],
      PinCode: [''],
      LogoURL: [''],
      GstNo: [''],
    });

    this.jobseekerForm = this.fb.group({
      FullName: [''],
      EmailId: [''],
      MobileNo: [''],
      ExperienceStatus: [''],
      ResumeUrl: [''],
      JobSeekerSkills: [''],
      JobSeekerWorkExperiences: [''],
    });
  }

  onRegister() {
    if (!this.isEmployer) {
      console.log(this.jobseekerForm.value, '#value jobseeker');
      this.loginService
        .addNewJobseeker(this.jobseekerForm.value)
        .subscribe((res) => {
          this.showToastMessage();
          this.jobseekerForm.reset();
        });
    } else {
      console.log(this.employerForm.value, '#value jobseeker');
      this.loginService
        .addNewEmployer(this.employerForm.value)
        .subscribe((res) => {
          this.showToastMessage();
          this.employerForm.reset();
        });
    }
  }

  showToastMessage() {
    this.toast.success({
      detail: 'Success',
      summary: 'Register successfully',
      duration: 3000,
    });
  }
}
