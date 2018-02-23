import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public loading: boolean;

  public onLoading(loading: boolean) {
    this.loading = loading;
  }
}
