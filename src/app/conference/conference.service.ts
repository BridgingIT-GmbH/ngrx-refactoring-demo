import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class ConferenceService {

  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public loading$: Observable<boolean>;

  constructor(private httpClient: HttpClient) {
    this.loading$ = this.loadingSubject.asObservable();
  }

  public loadSchedule(): Observable<any> {
    this.loadingSubject.next(true);
    return this.httpClient.get('/assets/schedule.json')
      .pipe(
        delay(2000),
        finalize(() => this.loadingSubject.next(false))
      );
  }

}
