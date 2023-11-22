import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  activeJobListing: any = [];
  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.jobService.getActiveJobListing().subscribe((val) => {
      this.activeJobListing = val.data;
    });
  }
}
