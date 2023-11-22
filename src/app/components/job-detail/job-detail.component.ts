import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { JobService } from 'src/app/services/job.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css'],
})
export class JobDetailComponent implements OnInit {
  jobId!: number;
  job: any;
  isEmployer = false;
  userRole!: string;
  isLoggedIn = false;
  application = {
    ApplicationId: 0,
    JobId: 0,
    JobSeekerId: 0,
    AppliedDate: new Date(),
    ApplcationStatus: 'New',
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jobService: JobService,
    private loginService: LoginService,
    private toast: NgToastService
  ) {}

  ngOnInit() {
    const local = JSON.parse(localStorage.getItem('loginAccount') as string);

    if (local) {
      this.isLoggedIn = true;
      this.loginService.isLoggedIn.next(this.isLoggedIn);
    } else {
      this.isLoggedIn = false;
    }

    this.loginService.isLoggedIn.subscribe((val) => {
      this.isLoggedIn = val;
      if (this.isLoggedIn) {
        const local = JSON.parse(
          localStorage.getItem('loginAccount') as string
        );
        this.application.JobSeekerId = local.jobSeekerId;

        this.userRole = local.userRole;
        if (this.userRole == 'Employer') {
          this.isEmployer = true;
        } else this.isEmployer = false;
      }
    });

    this.activatedRoute.params.subscribe((val) => {
      this.jobId = val['jobId'];
      console.log(this.jobId);
      this.application.JobId = this.jobId;
      this.jobService.getJobDetailByJobId(this.jobId).subscribe((data) => {
        console.log(data, '#data');
        this.job = data.data;
      });
    });
  }

  applyJob() {
    this.jobService.applyJob(this.application).subscribe((val) => {
      console.log(val, '#application');
      this.toast.success({
        detail: 'Success',
        summary: 'This application has been successfully applied',
        duration: 3000,
      });
    });
  }
}
