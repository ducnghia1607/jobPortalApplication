import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { CreateNewJobComponent } from './components/create-new-job/create-new-job.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { MyAppliedJobComponent } from './components/my-applied-job/my-applied-job.component';
import { MyCreatedJobComponent } from './components/my-created-job/my-created-job.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'jobs', component: JobListComponent },
  { path: 'jobs/:jobId', component: JobDetailComponent },
  { path: 'createjob', component: CreateNewJobComponent },
  { path: 'updatejob/:jobId', component: CreateNewJobComponent },
  { path: 'mycreatedjob', component: MyCreatedJobComponent },
  { path: 'myappliedjob', component: MyAppliedJobComponent },

  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
