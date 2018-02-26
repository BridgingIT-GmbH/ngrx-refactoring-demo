import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { ConferenceEffects } from './conference.effects';

describe('ConferenceService', () => {
  let actions$: Observable<any>;
  let effects: ConferenceEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConferenceEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ConferenceEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
