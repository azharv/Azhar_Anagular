import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostReportingComponent } from './user-post-reporting.component';

describe('UserPostReportingComponent', () => {
  let component: UserPostReportingComponent;
  let fixture: ComponentFixture<UserPostReportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPostReportingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPostReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
