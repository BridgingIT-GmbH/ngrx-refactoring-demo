import { Component, OnInit } from '@angular/core';
import { ConferenceService } from '../../conference/conference.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public loading$: Observable<boolean>;

  constructor(conferenceService: ConferenceService) {
    this.loading$ = conferenceService.loading$;
  }

  ngOnInit() {
  }

}
