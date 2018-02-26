import { Component, OnInit, Input } from '@angular/core';
import { ConferenceService } from '../../conference/conference.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { State } from '../../store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public loading$: Observable<boolean>;

  constructor(store: Store<State>) {
    this.loading$ = store.select('conference', 'loading');
  }

  ngOnInit() {
  }

}
