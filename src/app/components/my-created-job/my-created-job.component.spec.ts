import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCreatedJobComponent } from './my-created-job.component';

describe('MyCreatedJobComponent', () => {
  let component: MyCreatedJobComponent;
  let fixture: ComponentFixture<MyCreatedJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCreatedJobComponent]
    });
    fixture = TestBed.createComponent(MyCreatedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
