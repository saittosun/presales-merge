import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as CustomerActions from './customer.actions';
import { Customer } from '~types/customer';

export const customersFeatureKey = 'customers';

export interface CustomerState extends EntityState<Customer> {
  selectedCustomer: Customer;
  error: any;
}

export const adapter: EntityAdapter<Customer> = createEntityAdapter<Customer>();

export const initialState: CustomerState = adapter.getInitialState({
  selectedCustomer: undefined,
  error: undefined
});

export const reducer = createReducer(
  initialState,
  on(CustomerActions.addCustomerSuccess,
    (state, action) => adapter.addOne(action.customer, state)
  ),
  on(CustomerActions.addCustomerFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),
  on(CustomerActions.loadCustomersSuccess,
    (state, action) => adapter.setAll(action.customers, state)
  ),
  on(CustomerActions.loadCustomersFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),
  on(CustomerActions.loadCustomerSuccess,
    (state, action) => {
      return {
        ...state,
        selectedCustomer: action.selectedCustomer
      }
    }
  ),
  on(CustomerActions.loadCustomerFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),
  on(CustomerActions.updateCustomer,
    (state, action) => adapter.updateOne(action.customer, state)
  ),
  on(CustomerActions.deleteCustomer,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(CustomerActions.deleteCustomers,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
);

// export function reducer(state: CustomerState | undefined, action: Action) {
//   return customerReducer(state, action)
// }


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
