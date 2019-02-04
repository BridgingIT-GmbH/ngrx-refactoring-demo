import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISchedule } from '../conference.model';
import { select, Store } from '@ngrx/store';
import { State } from '../../reducers';
import { LoadSchedule } from '../conference.actions';
import { loading, schedule } from '../conference.reducer';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  public schedule$: Observable<ISchedule>;
  public loading$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.loading$ = this.store.pipe(select(loading));
    this.schedule$ = this.store.pipe(select(schedule));
  }

  public load() {
    this.store.dispatch(new LoadSchedule());
  }

  ngOnInit() {
    this.load();
  }

}
