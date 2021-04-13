import { customersFeatureKey, CustomerState, selectAll } from './customer.reducer';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectCustomerState = createFeatureSelector<CustomerState>(
  customersFeatureKey
);

export const selectCustomers = createSelector(selectCustomerState, selectAll);
export const selectedCustomer = createSelector(selectCustomerState, (state: CustomerState) => state.selectedCustomer)

