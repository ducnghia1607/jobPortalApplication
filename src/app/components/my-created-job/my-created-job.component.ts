import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Job } from 'src/app/model/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-my-created-job',
  templateUrl: './my-created-job.component.html',
  styleUrls: ['./my-created-job.component.css'],
})
export class MyCreatedJobComponent implements OnInit {
  employerId!: number;
  jobList: any = [];
  constructor(private jobService: JobService, private toast: NgToastService) {}

  ngOnInit(): void {
    this.employerId = JSON.parse(
      localStorage.getItem('loginAccount') as string
    ).employerId;
    this.getJobByEmployerId();
  }

  getJobByEmployerId() {
    this.jobService.getJobByEmployerId(this.employerId).subscribe((val) => {
      this.jobList = val.data;
      console.log(this.jobList);
    });
  }

  deleteJob(jobId: number) {
    this.jobService.deleteJob(jobId).subscribe(() => {
      this.getJobByEmployerId();
      this.toast.success({
        detail: 'Success',
        summary: 'Job deleted successfully',
        duration: 3000,
      });
    });
  }

  updateJob(job: Job, jobId: number) {}
}
