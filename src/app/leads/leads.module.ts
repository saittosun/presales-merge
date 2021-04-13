import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '~shared/shared.module';
import { LeadsRoutingModule } from './leads.routing';
import { LeadService } from './services/lead.service';
import { LeadFacade } from './services/lead.facade';
import { LeadEditPageComponent } from './pages/lead-edit/lead-edit.component';
import { NewLeadPageComponent } from './pages/new-lead-form/new-lead-form.component';
import { LeadDetailPageComponent } from './pages/lead-detail/lead-detail.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LeadsOverviewPageComponent } from './pages/overview/leads-overview-page.component';
import * as fromLead from './store/lead.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LeadEffects } from './store/lead.effects';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    LeadsRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    StoreModule.forFeature(fromLead.leadsFeatureKey, fromLead.reducer),
    EffectsModule.forFeature([LeadEffects])
  ],
  declarations: [
    LeadDetailPageComponent,
    NewLeadPageComponent,
    LeadEditPageComponent,
    LeadsOverviewPageComponent,
  ],
  providers: [LeadService, LeadFacade]
})
export class LeadsModule { }
