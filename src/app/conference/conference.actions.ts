import { Action } from '@ngrx/store';

export enum ConferenceActionTypes {
  ConferenceAction = '[Conference] Action'
}

export class Conference implements Action {
  readonly type = ConferenceActionTypes.ConferenceAction;
}

export type ConferenceActions = Conference;
