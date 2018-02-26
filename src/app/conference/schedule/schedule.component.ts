import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ConferenceService } from '../conference.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { ISchedule } from '../conference.model';
import { LoadSchedule } from '../conference.actions';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  public loading$: Observable<boolean>;
  public schedule$: Observable<ISchedule>;

  constructor(private store: Store<State>) {
    this.loading$ = store.select('conference', 'loading');
    this.schedule$ = store.select('conference', 'schedule');
  }

  public load() {
    this.store.dispatch(new LoadSchedule());
  }

  ngOnInit() {
    this.load();
  }

}
