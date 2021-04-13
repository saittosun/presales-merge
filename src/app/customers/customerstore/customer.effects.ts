import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";

import { Customer } from "~types/customer";

import { CustomerService } from "../services/customer.service";

import { addCustomerFailed, addCustomerSuccess, getCustomersFailed, updateCustomerFailed, updateCustomerSuccess } from "./customer.actions";
import { getCustomersSuccess } from "./customer.actions";
import { CustomerActions } from "./customer.actions";

@Injectable()
export class CustomerEffects {
  constructor() { }

  // public getCustomers$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(CustomerActions.getCustomers),
  //     switchMap(() =>
  //       this.customerService.fetchCustomers().pipe(
  //         map((results: Customer[]) => getCustomersSuccess({ results })),
  //         catchError((error: any) => of(getCustomersFailed({ error })))
  //       )
  //     )
  //   )
  // );

  // public updateCustomer$ = createEffect(() =>
  // this.actions$.pipe(
  //   ofType(CustomerActions.updateCustomer),
  //   switchMap(({customer, id}: {customer: Customer; id: number}) =>
  //     this.customerService.updateCustomer(id, customer).pipe(
  //       map((customer: Customer) => updateCustomerSuccess({ customer })),
  //       tap(() => {
  //         this.router.navigate(['customers/customer-detail', id])
  //       }),
  //       catchError((error: any) => of(updateCustomerFailed({ error })))
  //       )
  //     )
  //   )
  // );

  // public addCustomer$ = createEffect(() =>
  //  this.actions$.pipe(
  //    ofType(CustomerActions.addCustomer),
  //    switchMap(({customer}: {customer: Customer;}) =>
  //     this.customerService.addCustomer(customer).pipe(
  //       map((customer: Customer) => addCustomerSuccess({customer})),
  //       tap(() => {
  //         this.router.navigate(['customers/customer-detail'])
  //       }),
  //       catchError((error: any) => of(addCustomerFailed({error})))
  //     )
  //   )
  //  )
  // )
}
