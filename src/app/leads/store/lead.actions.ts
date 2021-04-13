import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Lead } from '~types/lead';


// load list of leads
export const loadLeads = createAction(
  '[Leads Component] Load Leads'
);

export const loadLeadsSuccess = createAction(
  '[Lead Effects] Load Leads Success',
  props<{ leads: Lead[] }>()
);

export const loadLeadsFailure = createAction(
  '[Lead Effects] Load Leads Failure',
  props<{ error: any }>()
);

// load customer
export const loadLead = createAction(
  '[Lead Detail] Load Lead',
  props<{ id: string }>()
);

export const loadLeadSuccess = createAction(
  '[Lead Effects] Load Lead Success',
  props<{ selectedLead: Lead }>()
);

export const loadLeadFailure = createAction(
  '[Lead Effects] Load Lead Failure',
  props<{ error: any }>()
);

// add customer

export const addLead = createAction(
  '[Lead New Form Component] Add Lead',
  props<{ lead: Lead }>()
);

export const addLeadSuccess = createAction(
  '[Lead Effects] Add Lead Success',
  props<{ lead: Lead }>()
);

export const addLeadFailure = createAction(
  '[Lead Effects] Add Lead Failure',
  props<{ error: any }>()
);

export const upsertLead = createAction(
  '[Lead/API] Upsert Lead',
  props<{ lead: Lead }>()
);

export const upsertLeads = createAction(
  '[Lead/API] Upsert Leads',
  props<{ leads: Lead[] }>()
);

export const updateLead = createAction(
  '[Lead/API] Update Lead',
  props<{ lead: Update<Lead> }>()
);

export const updateLeads = createAction(
  '[Lead/API] Update Leads',
  props<{ leads: Update<Lead>[] }>()
);

export const deleteLead = createAction(
  '[Lead/API] Delete Lead',
  props<{ id: string }>()
);

export const deleteLeads = createAction(
  '[Lead/API] Delete Leads',
  props<{ ids: string[] }>()
);

export const clearLeads = createAction(
  '[Lead/API] Clear Leads'
);
