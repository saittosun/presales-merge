import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomersOverviewPageComponent } from './customers.component';

describe('CustomersOverviewPageComponent', () => {
  let component: CustomersOverviewPageComponent;
  let fixture: ComponentFixture<CustomersOverviewPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersOverviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
