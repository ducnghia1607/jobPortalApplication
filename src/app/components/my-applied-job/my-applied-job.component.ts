import { Component } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-my-applied-job',
  templateUrl: './my-applied-job.component.html',
  styleUrls: ['./my-applied-job.component.css'],
})
export class MyAppliedJobComponent {
  jobSeekerId!: number;
  jobList: any = [];
  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobSeekerId = JSON.parse(
      localStorage.getItem('loginAccount') as string
    ).jobSeekerId;
    console.log(this.jobSeekerId, '#Job seeker Id');
    this.getAllApplications();
  }

  getAllApplications() {
    this.jobService
      .getAllApplicationsByJobSeekerId(this.jobSeekerId)
      .subscribe((val) => {
        console.log(val);
        this.jobList = val.data;
      });
  }
}
