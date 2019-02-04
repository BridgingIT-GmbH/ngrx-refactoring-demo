import { Action } from '@ngrx/store';

export enum ConferenceActionTypes {
  LoadConferences = '[Conference] Load Conferences',
  
  
}

export class LoadConferences implements Action {
  readonly type = ConferenceActionTypes.LoadConferences;
}


export type ConferenceActions = LoadConferences;
