import { Customer } from '~types/customer';

import { CustomerActions } from './customer.actions';

export interface CustomerListState {
  results: Customer[];
  loading: boolean;
  error: string;
}

export interface CustomersState {
  list: CustomerListState;
}

export interface AppState {
  customers: CustomersState;
}

export interface CustomerAction {
  type: keyof typeof CustomerActions;
  results?: Customer[];
  error?: string;
  loading?: boolean;
}
