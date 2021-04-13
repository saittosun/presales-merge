import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerDetailPageComponent } from './pages/customer-detail/customer-detail.component';
import { CustomerEditPageComponent } from './pages/customer-edit/customer-edit.component';
import { NewCustomerPageComponent } from './pages/new-customer-form/new-customer-form.component';
import { CustomersOverviewPageComponent } from './pages/overview/customers.component';

const routes: Routes = [
  { path: '', component: CustomersOverviewPageComponent },
  { path: 'new-customer-form', component: NewCustomerPageComponent },
  { path: 'customer-detail/:id', component: CustomerDetailPageComponent },
  { path: 'customer-detail/:id/edit', component: CustomerEditPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class CustomersRoutingModule { }
