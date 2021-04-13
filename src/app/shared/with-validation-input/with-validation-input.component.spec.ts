import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WithValidationInputComponent } from './with-validation-input.component';

describe('WithValidationInputComponent', () => {
  let component: WithValidationInputComponent;
  let fixture: ComponentFixture<WithValidationInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WithValidationInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithValidationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
