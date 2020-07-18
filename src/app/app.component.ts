import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from './store/app.state';
import * as fromStats from './store/stats/stats.selectors';
import * as fromStatsActions from './store/stats/stats.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public stats$: Observable<any>;
  public highestIndex = 0;
  constructor(private _store: Store<IAppState>) {}

  public ngOnInit(): void {
    this._store.dispatch(new fromStatsActions.GetStats(10));
    this.stats$ = this._store.pipe(select(fromStats.getStats));
  }

  public nextRecords(event: any): void {
    if (event > this.highestIndex){
      this.highestIndex = event;
      this._store.dispatch(new fromStatsActions.GetStats(this.highestIndex * 10));
    }
    return;
  }
}
