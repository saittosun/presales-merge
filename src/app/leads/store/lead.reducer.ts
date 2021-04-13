import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as LeadActions from './lead.actions';
import { Lead } from '~types/lead';

export const leadsFeatureKey = 'leads';

export interface LeadState extends EntityState<Lead> {
  // additional entities state properties
  error: any
  selectedLead: Lead
}

export const adapter: EntityAdapter<Lead> = createEntityAdapter<Lead>();

export const initialState: LeadState = adapter.getInitialState({
  // additional entity state properties
  error: undefined,
  selectedLead: undefined
});
export const reducer = createReducer(
  initialState,
  on(LeadActions.addLeadSuccess,
    (state, action) => adapter.addOne(action.lead, state)
  ),
  on(LeadActions.addLeadFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),
  on(LeadActions.loadLeadsSuccess,
    (state, action) => adapter.setAll(action.leads, state)
  ),
  on(LeadActions.loadLeadsFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),
  on(LeadActions.loadLeadSuccess,
    (state, action) => {
      return {
        ...state,
        selectedLead: action.selectedLead
      }
    }
  ),
  on(LeadActions.loadLeadFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),
  on(LeadActions.upsertLead,
    (state, action) => adapter.upsertOne(action.lead, state)
  ),
  on(LeadActions.upsertLeads,
    (state, action) => adapter.upsertMany(action.leads, state)
  ),
  on(LeadActions.updateLead,
    (state, action) => adapter.updateOne(action.lead, state)
  ),
  on(LeadActions.updateLeads,
    (state, action) => adapter.updateMany(action.leads, state)
  ),
  on(LeadActions.deleteLead,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(LeadActions.deleteLeads,
    (state, action) => adapter.removeMany(action.ids, state)
  ),

  on(LeadActions.clearLeads,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
