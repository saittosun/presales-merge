import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadDetailPageComponent } from './pages/lead-detail/lead-detail.component';
import { LeadEditPageComponent } from './pages/lead-edit/lead-edit.component';
import { NewLeadPageComponent } from './pages/new-lead-form/new-lead-form.component';
import { LeadsOverviewPageComponent } from './pages/overview/leads-overview-page.component';

const routes: Routes = [
  { path: '', component: LeadsOverviewPageComponent },
  { path: 'new-lead-form', component: NewLeadPageComponent },
  { path: 'lead-detail/:id', component: LeadDetailPageComponent },
  { path: 'lead-detail/:id/edit', component: LeadEditPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class LeadsRoutingModule { }
