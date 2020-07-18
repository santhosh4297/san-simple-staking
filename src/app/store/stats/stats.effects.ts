import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromStatsActions from './stats.actions';
import { StatsService } from '../../services/stats/stats.service';

@Injectable()
export class StatsEffects {
  public getStats$ = createEffect(() =>
    this._actions$.pipe(
      ofType(fromStatsActions.EStatsType.GetStats),
      switchMap((action: fromStatsActions.GetStats) =>
       this._statsService.getStats(action.limit).pipe(
          map((stats: any[]) => new fromStatsActions.GetStatsSuccess(stats)),
          catchError(error => of(new fromStatsActions.GetStatsError(error)))
      )))
  );

  constructor(private _actions$: Actions, private _statsService: StatsService) {}
}
