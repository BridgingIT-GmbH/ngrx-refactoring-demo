import { Action } from '@ngrx/store';
import { ISchedule } from './conference.model';

export enum ConferenceActionTypes {
  LoadSchedule = '[Conference] Load Schedule',
  LoadScheduleSuccess = '[Conference] Load Schedule Success',
  LoadScheduleError = '[Conference] Load Schedule Error',
}

export class LoadSchedule implements Action {
  readonly type = ConferenceActionTypes.LoadSchedule;
}

export class LoadScheduleSuccess implements Action {
  readonly type = ConferenceActionTypes.LoadScheduleSuccess;

  constructor(public payload: ISchedule) { }
}

export class LoadScheduleError implements Action {
  readonly type = ConferenceActionTypes.LoadScheduleError;

  constructor(public payload: any) { }
}

export type ConferenceActions = LoadSchedule | LoadScheduleSuccess | LoadScheduleError;
