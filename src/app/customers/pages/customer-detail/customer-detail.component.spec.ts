import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomerDetailPageComponent } from './customer-detail.component';

describe('CustomerDetailPageComponent', () => {
  let component: CustomerDetailPageComponent;
  let fixture: ComponentFixture<CustomerDetailPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
