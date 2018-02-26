import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromConference from '../conference/conference.reducer';

export interface State {

  conference: fromConference.State;
}

export const reducers: ActionReducerMap<State> = {

  conference: fromConference.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
