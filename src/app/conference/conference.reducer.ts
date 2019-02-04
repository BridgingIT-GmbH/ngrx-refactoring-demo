
import { ConferenceActions, ConferenceActionTypes } from './conference.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: ConferenceActions): State {
  switch (action.type) {

    case ConferenceActionTypes.LoadConferences:
      return state;

    default:
      return state;
  }
}
