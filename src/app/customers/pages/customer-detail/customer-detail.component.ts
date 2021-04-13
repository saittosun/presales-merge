import { selectedCustomer } from './../../store/customer.selectors';
import { loadCustomer } from './../../store/customer.actions';
import { CustomerState } from './../../store/customer.reducer';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Customer } from '~types/customer';
import { CustomerFacade } from '~customers/services/customer.facade';
import { combineLatest, Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailPageComponent implements OnInit {
  private destroyed$ = new Subject<boolean>();
  // customers: Customer[];
  // customer: Customer;
  customer$: Observable<Customer>
  id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<CustomerState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadCustomer({id: this.route.snapshot.paramMap.get('id')}))
    this.customer$ = this.store.pipe(select(selectedCustomer))
    console.log(this.customer$);
    // combineLatest(
    //   this.store.getCustomers(),
    //   this.route.params
    // ).pipe(
    //   takeUntil(this.destroyed$)
    // ).subscribe(([customers, params]) => {
    //   this.store.findCustomer(params.id).subscribe(customer => this.customer = customer)
    // })
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}

