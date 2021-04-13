import { Lead } from '../../types/lead';
import { Action, createReducer, on } from "@ngrx/store";

import {
  getLeads,
  getLeadsFailed,
  getLeadsSuccess,
  setLeads,
} from "./lead.actions";
import { LeadListState } from "./lead.types";

export const LEAD_INITIAL_STATE: LeadListState = {
  results: [],
  loading: false,
  error: null
};

export const listReducer = createReducer(
  LEAD_INITIAL_STATE as any,
  on(getLeads, (actionState: LeadListState) => ({
    ...actionState,
    loading: true,
    error: null
  })) as any,
  on(
    getLeadsSuccess,
    (state: LeadListState, { results }: any) => ({
      ...state
    })
  ) as any,
  on(
    getLeadsFailed,
    (state: LeadListState, { error }: any) => ({
      ...state,
      loading: false,
      error
    })
  ) as any,
  on(
    setLeads,
    (state: LeadListState, { leads }: {leads: Lead[]}) => ({
      ...state,
      results: leads,
      loading: false,
      error: null
    })
  ) as any,
);

function listReducerWrapper(state: LeadListState, action: Action) {
  return listReducer(state, action);
}

export const leadReducers: any = {
  list: listReducerWrapper
};
