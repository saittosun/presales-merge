import { Router } from '@angular/router';
import { CustomerService } from './../services/customer.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import * as fromCustomerActions  from './customer.actions';
import { catchError, concatMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CustomerEffects {
  loadCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCustomerActions.loadCustomers),
      mergeMap(action =>
        this.customerService.fetchCustomers().pipe(
          map(customers => fromCustomerActions.loadCustomersSuccess({customers})),
          catchError(error =>
            of(fromCustomerActions.loadCustomersFailure({error}))
          )
        )
      )
    )
  );

  loadCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCustomerActions.loadCustomer),
      mergeMap(action =>
        this.customerService.getCustomer(action.id).pipe(
          map(customer => fromCustomerActions.loadCustomerSuccess({selectedCustomer: customer})),
          catchError(error =>
            of(fromCustomerActions.loadCustomerFailure({error}))
          )
        )
      )
    )
  );

  createCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCustomerActions.addCustomer),
      mergeMap(action =>
        this.customerService.addCustomer(action.customer).pipe(
          map(customer => fromCustomerActions.addCustomerSuccess({customer})),
          catchError(error =>
            of(fromCustomerActions.addCustomerFailure({error}))
          )
        )
      ),
      tap(() => this.router.navigate(['../']))
    )
  );

  updateCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCustomerActions.updateCustomer),
      concatMap(action =>
        this.customerService.updateCustomer(action.customer.id, action.customer.changes)
      ),
      tap(() => this.router.navigate(['../']))
    ),
    { dispatch: false}
  );

  constructor(private actions$: Actions,
              private customerService: CustomerService,
              private router: Router) {}
}
