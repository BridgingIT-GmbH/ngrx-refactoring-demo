import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { ConferenceService } from './conference.service';

describe('ConferenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConferenceService,
        { provide: HttpClient, useValue: {} }
      ]
    });
  });

  it('should be created', inject([ConferenceService], (service: ConferenceService) => {
    expect(service).toBeTruthy();
  }));
});
