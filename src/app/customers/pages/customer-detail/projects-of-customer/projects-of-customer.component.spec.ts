import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsOfCustomerComponent } from './projects-of-customer.component';

describe('ProjectsOfCustomerComponent', () => {
  let component: ProjectsOfCustomerComponent;
  let fixture: ComponentFixture<ProjectsOfCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsOfCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsOfCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
