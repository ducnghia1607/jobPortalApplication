import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Job } from 'src/app/model/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-create-new-job',
  templateUrl: './create-new-job.component.html',
  styleUrls: ['./create-new-job.component.css'],
})
export class CreateNewJobComponent implements OnInit {
  userRole!: string;
  jobId!: number;
  jobCategory: any;
  newJob!: FormGroup;
  employerId: any;
  isUpdate: boolean = false;
  updatedJob!: Job;
  constructor(
    private fb: FormBuilder,
    private jobService: JobService,
    private toast: NgToastService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.jobService.$jobCategory.subscribe((val) => {
      this.jobCategory = val.data;
    });

    this.employerId = JSON.parse(
      localStorage.getItem('loginAccount') as string
    ).employerId;
    this.newJob = this.fb.group({
      JobName: [''],
      EmployerId: this.employerId,
      CategoryId: [''],
      Experience: [''],
      Package: [''],
      Location: [''],
      JobDescription: [''],
      isActive: true,
      CreatedDate: new Date(),
    });

    this.activatedRoute.params.subscribe((val) => {
      this.jobId = val['jobId'];

      this.jobService.getJobDetailByJobId(this.jobId).subscribe((val) => {
        console.log(val, '#update job');
        this.isUpdate = true;

        this.newJob.controls['JobName'].setValue(val.data.jobName);
        this.newJob.controls['CategoryId'].setValue(val.data.categoryId);
        this.newJob.controls['Experience'].setValue(val.data.experience);
        this.newJob.controls['Package'].setValue(val.data.package);
        this.newJob.controls['Location'].setValue(val.data.location);
        this.newJob.controls['JobDescription'].setValue(
          val.data.jobDescription
        );
        console.log(this.newJob.value, '#update job');
      });
    });
  }

  createJob() {
    console.log(this.jobCategory);
    console.log(this.newJob.value);
    this.jobService.createNewJob(this.newJob.value).subscribe((val) => {
      this.newJob.reset();
      console.log(val);
      this.toast.success({
        detail: 'Success',
        summary: 'Job created successfully',
        duration: 3000,
      });
    });
  }

  updateJob() {
    this.jobService.updateJob(this.newJob.value).subscribe((val) => {
      console.log(val);
      this.newJob.reset();
      this.toast.success({
        detail: 'Success',
        summary: 'Job updated successfully',
        duration: 3000,
      });
    });
  }
}
