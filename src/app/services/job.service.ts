import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';
import { Job } from '../model/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  isEmployer = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {}

  $jobCategory = this.fetchJobCategory().pipe(shareReplay(1));

  createNewJob(job: Job): Observable<Job> {
    return this.http.post<Job>(
      'https://freeapi.miniprojectideas.com/api/JobPortal/CreateNewJobListing',
      job
    );
  }

  fetchJobCategory() {
    return this.http.get<any>(
      'https://freeapi.miniprojectideas.com/api/JobPortal/GetAllJobCategory'
    );
  }

  getActiveJobListing() {
    return this.http.get<any>(
      'https://freeapi.miniprojectideas.com/api/JobPortal/GetActiveJobListing'
    );
  }

  getJobDetailByJobId(jobId: number) {
    return this.http.get<any>(
      'https://freeapi.miniprojectideas.com/api/JobPortal/GetJobListingById?jobId=' +
        jobId
    );
  }

  getJobByEmployerId(employerId: number) {
    return this.http.get<any>(
      'https://freeapi.miniprojectideas.com/api/JobPortal/GetJobsByEmployerId?employerId=' +
        employerId
    );
  }

  getJobBySeekerId(jobSeekerId: number) {
    return this.http.get<any>(
      'https://freeapi.miniprojectideas.com/api/JobPortal/GetApplcationsByJobSeekerId?jobSeekerId=' +
        jobSeekerId
    );
  }

  applyJob(application: any) {
    return this.http.post<any>(
      'https://freeapi.miniprojectideas.com/api/JobPortal/SendJobApplication',
      application
    );
  }

  getAllApplicationsByJobSeekerId(jobSeekerId: number) {
    return this.http.get<any>(
      'https://freeapi.miniprojectideas.com/api/JobPortal/GetApplcationsByJobSeekerId?jobSeekerId=' +
        jobSeekerId
    );
  }

  deleteJob(jobId: number) {
    return this.http.delete<any>(
      'https://freeapi.miniprojectideas.com/api/JobPortal/DeleteJobById?jobid=' +
        jobId
    );
  }

  updateJob(job: Job) {
    return this.http.put<any>(
      'https://freeapi.miniprojectideas.com/api/JobPortal/UpdateJobListing',
      job
    );
  }
}
