import { Lead } from '../../types/lead';

import { LeadActions } from './lead.actions';

export interface LeadListState {
  results: Lead[];
  loading: boolean;
  error: string;
}

export interface LeadsState {
  list: LeadListState;
}

export interface AppState {
  leads: LeadsState;
}

export interface LeadAction {
  type: keyof typeof LeadActions;
  results?: Lead[];
  error?: string;
  loading?: boolean;
}
