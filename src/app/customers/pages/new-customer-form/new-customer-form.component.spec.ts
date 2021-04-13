import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewCustomerPageComponent } from './new-customer-form.component';

describe('NewCustomerPageComponent', () => {
  let component: NewCustomerPageComponent;
  let fixture: ComponentFixture<NewCustomerPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCustomerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCustomerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
