import { createSelector } from '@ngrx/store';

import { AppState, CustomersState } from './customer.types';

export const CUSTOMERS_ROOT_SELECTOR = (state: AppState) => state.customers;

export const CUSTOMERS_LOADING = createSelector(
  CUSTOMERS_ROOT_SELECTOR,
  (state: CustomersState) => state.list.loading,
);

export const CUSTOMERS_ERROR = createSelector(
  CUSTOMERS_ROOT_SELECTOR,
  (state: CustomersState) => state.list.error,
);

export const CUSTOMER_UPDATE = createSelector(
  CUSTOMERS_ROOT_SELECTOR,
  (state: CustomersState) => state.list.results
)

export const CUSTOMER_ADD = createSelector(
  CUSTOMERS_ROOT_SELECTOR,
  (state: CustomersState) => state.list.results
)
