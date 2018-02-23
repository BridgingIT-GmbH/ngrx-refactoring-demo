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
  public loading: boolean;
  private scheduleSubscription: Subscription;

  @Output() public loadingChange = new EventEmitter<boolean>();

  constructor(private conferenceService: ConferenceService) { }

  public load() {
    this.loading = true;
    this.loadingChange.emit(true);
    this.schedule = undefined;

    if (this.scheduleSubscription) {
      this.scheduleSubscription.unsubscribe();
    }

    this.scheduleSubscription = this.conferenceService.loadSchedule().subscribe((schedule) => {
      this.schedule = schedule;
      this.loading = false;
      this.loadingChange.emit(false);
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
