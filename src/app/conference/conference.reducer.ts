import { Action } from '@ngrx/store';
import { ConferenceActions, ConferenceActionTypes } from './conference.actions';
import { ISchedule } from './conference.model';

export interface State {
  schedule: ISchedule;
  loading: boolean;
  error: any;
}

export const initialState: State = {
  schedule: undefined,
  loading: false,
  error: undefined
};

export function reducer(state = initialState, action: ConferenceActions): State {
  switch (action.type) {

    case ConferenceActionTypes.LoadSchedule:
      return { ...state, loading: true, error: undefined, schedule: undefined };
    case ConferenceActionTypes.LoadScheduleSuccess:
      return { ...state, loading: false, error: undefined, schedule: action.payload };
    case ConferenceActionTypes.LoadScheduleError:
      return { ...state, loading: false, error: action.payload, schedule: undefined };
    default:
      return state;
  }
}
