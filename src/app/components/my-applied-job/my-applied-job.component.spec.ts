import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppliedJobComponent } from './my-applied-job.component';

describe('MyAppliedJobComponent', () => {
  let component: MyAppliedJobComponent;
  let fixture: ComponentFixture<MyAppliedJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAppliedJobComponent]
    });
    fixture = TestBed.createComponent(MyAppliedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
