import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ConferenceService } from '../conference.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy {

  public schedule;
  public loading$: Observable<boolean>;
  private scheduleSubscription: Subscription;

  constructor(private conferenceService: ConferenceService) {
    this.loading$ = conferenceService.loading$;
  }

  public load() {
    this.schedule = undefined;

    if (this.scheduleSubscription) {
      this.scheduleSubscription.unsubscribe();
    }

    this.scheduleSubscription = this.conferenceService.loadSchedule().subscribe((schedule) => {
      this.schedule = schedule;
    });
  }

  ngOnInit() {
    this.load();
  }

  ngOnDestroy() {
    if (this.scheduleSubscription) {
      this.scheduleSubscription.unsubscribe();
    }
  }

}
