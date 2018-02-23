import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';

import { ScheduleComponent } from './schedule.component';
import { ConferenceService } from '../conference.service';

import { of } from 'rxjs/observable/of';

describe('ScheduleComponent', () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleComponent],
      providers: [{
        provide: ConferenceService, useValue: {
          loadSchedule: () => { }
        }
      }],
      imports: [
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatProgressSpinnerModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const conferenceService = TestBed.get(ConferenceService);
    spyOn(conferenceService, 'loadSchedule').and.returnValue(of({}));

    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
