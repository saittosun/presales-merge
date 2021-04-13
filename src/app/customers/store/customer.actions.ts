import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Customer } from '~types/customer';

// load list of customers
export const loadCustomers = createAction(
  '[Customers Component] Load Customers'
);

export const loadCustomersSuccess = createAction(
  '[Customer Effects] Load Customers Success',
  props<{ customers: Customer[] }>()
);

export const loadCustomersFailure = createAction(
  '[Customer Effects] Load Customers Failure',
  props<{ error: any }>()
);

// load customer
export const loadCustomer = createAction(
  '[Customer Detail] Load Customer',
  props<{ id: string }>()
);

export const loadCustomerSuccess = createAction(
  '[Customer Effects] Load Customer Success',
  props<{ selectedCustomer: Customer }>()
);

export const loadCustomerFailure = createAction(
  '[Customer Effects] Load Customer Failure',
  props<{ error: any }>()
);

// add customer
export const addCustomer = createAction(
  '[Customer New Customer Component] Add Customer',
  props<{ customer: Customer }>()
);

export const addCustomerSuccess = createAction(
  '[Customer Add Effect] Add Customer Success',
  props<{ customer: Customer }>()
);

export const addCustomerFailure = createAction(
  '[Customer Add Effect] Add Customer Failure',
  props<{ error: any }>()
);

// edit component
export const updateCustomer = createAction(
  '[Customer Edit Component] Update Customer',
  props<{ customer: Update<Customer> }>()
);

export const deleteCustomer = createAction(
  '[Customer/API] Delete Customer',
  props<{ id: string }>()
);

export const deleteCustomers = createAction(
  '[Customer/API] Delete Customers',
  props<{ ids: string[] }>()
);

