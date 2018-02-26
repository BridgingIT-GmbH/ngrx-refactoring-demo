import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ConferenceActions, ConferenceActionTypes } from './conference.actions';

@Injectable()
export class ConferenceEffects {

  @Effect()
  effect$ = this.actions$.ofType(ConferenceActionTypes.ConferenceAction);

  constructor(private actions$: Actions) {}
}
