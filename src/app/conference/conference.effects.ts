import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';


import { ConferenceActions, ConferenceActionTypes, LoadScheduleError, LoadScheduleSuccess } from './conference.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ConferenceService } from './conference.service';
import { of } from 'rxjs';

@Injectable()
export class ConferenceEffects {


  @Effect()
  loadSchedule$ = this.actions$.pipe(
    ofType(ConferenceActionTypes.LoadSchedule),
    switchMap(() =>

      this.conferenceService.loadSchedule().pipe(
        map(schedule => new LoadScheduleSuccess(schedule)),
        catchError(error => of(new LoadScheduleError(error)))
      )
    )
  );


  constructor(
    private actions$: Actions<ConferenceActions>,
    private conferenceService: ConferenceService) {
  }

}
