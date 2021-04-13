import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '~shared/shared.module';

import { CustomersRoutingModule } from './customers.routing';
import { CustomerDetailPageComponent } from './pages/customer-detail/customer-detail.component';
import { CustomerEditPageComponent } from './pages/customer-edit/customer-edit.component';
import { NewCustomerPageComponent } from './pages/new-customer-form/new-customer-form.component';
import { CustomersOverviewPageComponent } from './pages/overview/customers.component';
import { CustomerFacade } from './services/customer.facade';
import { CustomerService } from './services/customer.service';
import { CustomerEffects } from './store/customer.effects';
import { customerReducers } from './customerstore/customer.reducer';
import { ProjectsOfCustomerComponent } from './pages/customer-detail/projects-of-customer/projects-of-customer.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import * as fromCustomer from './store/customer.reducer';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    // StoreModule.forFeature('customers', customerReducers),
    // EffectsModule.forFeature([CustomerEffects]),
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    StoreModule.forFeature(fromCustomer.customersFeatureKey, fromCustomer.reducer),
    EffectsModule.forFeature([CustomerEffects])
  ],
  declarations: [
    CustomerDetailPageComponent,
    CustomerEditPageComponent,
    NewCustomerPageComponent,
    CustomersOverviewPageComponent,
    ProjectsOfCustomerComponent,
  ],
  providers: [CustomerService, CustomerFacade]
})
export class CustomersModule { }
