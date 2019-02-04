import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';



import { ConferenceActionTypes } from './conference.actions';

@Injectable()
export class ConferenceEffects {


  @Effect()
  loadConferences$ = this.actions$.pipe(ofType(ConferenceActionTypes.LoadConferences));


  constructor(private actions$: Actions) {}

}
