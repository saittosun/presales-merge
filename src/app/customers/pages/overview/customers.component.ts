import { loadCustomers } from './../../store/customer.actions';
import { CustomerState } from './../../store/customer.reducer';
import { select, Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { CustomerFacade } from '~customers/services/customer.facade';
import { Customer } from '~types/customer';
import { selectCustomers } from '~customers/store/customer.selectors';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersOverviewPageComponent implements OnInit {
  // customers: Customer[];
  customers$: Observable<Customer[]>
  private destroyed$ = new Subject<boolean>();

constructor(private store: Store<CustomerState>) { }

  ngOnInit(): void {
    // this.store.getCustomers().subscribe(customers => this.customers = customers)
    this.store.dispatch(loadCustomers())
    this.loadCustomers()
  }

  loadCustomers() {
    this.customers$ = this.store.pipe(select(selectCustomers))
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
