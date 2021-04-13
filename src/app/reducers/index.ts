import { environment } from './../../environments/environment';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = [];

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
