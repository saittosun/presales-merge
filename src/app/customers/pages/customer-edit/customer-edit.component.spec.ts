import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomerEditPageComponent } from './customer-edit.component';

describe('CustomerEditPageComponent', () => {
  let component: CustomerEditPageComponent;
  let fixture: ComponentFixture<CustomerEditPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
