import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LeadDetailComponent } from './lead-detail.component';

describe('LeadDetailComponent', () => {
  let component: LeadDetailComponent;
  let fixture: ComponentFixture<LeadDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
