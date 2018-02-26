import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ConferenceActions, ConferenceActionTypes, LoadScheduleSuccess, LoadScheduleError } from './conference.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { ConferenceService } from './conference.service';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ConferenceEffects {

  @Effect()
  effect$ = this.actions$.
    pipe(
      ofType(ConferenceActionTypes.LoadSchedule),
      switchMap(_ => this.confService.loadSchedule()
        .pipe(
          map(schedule => new LoadScheduleSuccess(schedule)),
          catchError(error => of(new LoadScheduleError(error))
          ))
      ));

  constructor(private actions$: Actions, private confService: ConferenceService) { }
}
