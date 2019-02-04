import { ConferenceActions, ConferenceActionTypes } from './conference.actions';
import { ISchedule } from './conference.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  loading: boolean;
  schedule: ISchedule;
  error?: any;
}

export const initialState: State = {
  loading: false,
  schedule: null
};

export function reducer(state = initialState, action: ConferenceActions): State {
  switch (action.type) {

    case ConferenceActionTypes.LoadSchedule:
      return {...state, loading: true};

    default:
      return state;
  }
}

const conferenceFeature = createFeatureSelector<State>('conference');
export const schedule = createSelector(conferenceFeature, state => state.schedule);
export const loading = createSelector(conferenceFeature, state => state.loading);
