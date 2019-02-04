import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConferenceService {


  constructor(private httpClient: HttpClient) {
  }

  public loadSchedule(): Observable<any> {
    return this.httpClient.get('/assets/schedule.json')
      .pipe(
        delay(2000),
      );
  }

}
