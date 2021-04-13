import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { LeadsOverviewPageComponent } from './leads-overview-page.component';

describe('LeadsOverviewPageComponent', () => {
  let component: LeadsOverviewPageComponent;
  let fixture: ComponentFixture<LeadsOverviewPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadsOverviewPageComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
