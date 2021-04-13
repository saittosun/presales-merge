import { Lead } from './../../types/lead';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { setLeads } from '../leadstore/lead.actions';
import {
  LEADS_ERROR,
  LEADS_LOADING
} from '../leadstore/lead.selectors';
import { AppState } from '../leadstore/lead.types';

@Injectable()
export class LeadFacade {
  constructor(private store: Store<AppState>) { }

  public setLeads(leads: Lead[]) {
    this.store.dispatch(setLeads({leads: leads}));
  }

  public selectLoading(): Observable<boolean> {
    return this.store.pipe(select(LEADS_LOADING));
  }

  public selectError(): Observable<string> {
    return this.store.pipe(select(LEADS_ERROR));
  }

  public getLeads(): Observable<Lead[]> {
    return this.store.select('leads').pipe(map(state => state.list.results));
  }

}
