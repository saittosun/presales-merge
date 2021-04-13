import { select, Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Customer } from '~types/customer';
import { CustomerFacade } from '~customers/services/customer.facade';
import { Lead } from '~types/lead';
import { LeadState } from '../leads/store/lead.reducer';
import { loadLeads } from '../leads/store/lead.actions';
import { selectLeads } from '../leads/store/lead.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  model: any = []
  filteredCustomers$: Observable<Lead[]> = this.store.pipe(select(selectLeads))
  private destroyed$ = new Subject<boolean>();

  constructor(private store: Store<LeadState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadLeads())
    console.log(this.filteredCustomers$);
    // this.loadLeads();
  }

  // loadLeads() {
  //   this.store.pipe(select(selectLeads)).subscribe(leads => {
  //     this.model = [...leads]
  //     this.filteredCustomers = [...leads]
  //     console.log(this.model);
  //   })
  // }

  searchThis(val: string): void {
    // if (val === null || val === '') {
    //   this.filteredCustomers$ = [...this.model];
    //   return;
    // }
    // this.filteredCustomers$ = [...this.model.filter(lead => {
    //   return lead.customer.toLowerCase().includes(val.toLowerCase()) || lead.name.toLowerCase().includes(val.toLowerCase())
    // })]
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
