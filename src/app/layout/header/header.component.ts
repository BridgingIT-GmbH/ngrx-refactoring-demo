import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from '../../reducers';
import { loading } from '../../conference/conference.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public loading$: Observable<boolean>;

  constructor(store: Store<State>) {
    this.loading$ = store.pipe(select(loading));
  }

  ngOnInit() {
  }

}
