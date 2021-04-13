import { leadsFeatureKey, LeadState, selectAll } from './lead.reducer';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectLeadState = createFeatureSelector<LeadState>(
  leadsFeatureKey
);

export const selectLeads = createSelector(selectLeadState, selectAll);
export const selectedLead = createSelector(selectLeadState, (state: LeadState) => state.selectedLead)

