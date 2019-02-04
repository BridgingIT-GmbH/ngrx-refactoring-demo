import { Action } from '@ngrx/store';

export enum ConferenceActionTypes {
  LoadSchedule = '[Conference] LoadSchedule',


}

export class LoadSchedule implements Action {
  readonly type = ConferenceActionTypes.LoadSchedule;
}


export type ConferenceActions = LoadSchedule;
