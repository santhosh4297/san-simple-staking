import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { StatsEffects } from './stats.effects';

import { cold, hot } from 'jest-marbles';

import { StatsService } from '../../services/stats/stats.service';

import * as fromStatsActions from './stats.actions';
import * as fromRoot from '../../store/app.state';

describe('StatsEffects', () => {
  let actions$: Observable<any>;
  let effects: StatsEffects;
  let statsService: StatsService;
  let store: MockStore<fromRoot.IAppState>;

  const initialState: fromRoot.IAppState = {
    stats: null,
    users: null,
    router: {}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StatsEffects,
        provideMockActions(() => actions$),
        { provide: StatsService, useValue: { getStats: () => jest.fn() } },
        provideMockStore({ initialState })
      ]
    });

    effects = TestBed.inject<StatsEffects>(StatsEffects);
    statsService = TestBed.inject(StatsService);
    store = TestBed.inject<MockStore<fromRoot.IAppState>>(MockStore);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('GetStats', () => {
    it('should return a GetStatsSuccess action with the stats on success', () => {
      const action = new fromStatsActions.GetStats(1);
      const outcome = new fromStatsActions.GetStatsSuccess([1, 2]);

      actions$ = hot('-a', { a: action });

      const response = cold('-a|', { a: [1, 2] });
      statsService.getStats = jest.fn(() => response);

      const expected = cold('--b', { b: outcome });
      expect(effects.getStats$).toEqual(expected);
    });

    it('should return a GetStatsError action with an error on failure', () => {
      const action = new fromStatsActions.GetStats(1);
      const error = new Error();
      const outcome = new fromStatsActions.GetStatsError(error);

      actions$ = hot('-a', { a: action });

      const response = cold('-#|', {}, error);
      statsService.getStats = jest.fn(() => response);

      const expected = cold('--(b|)', { b: outcome });
      expect(effects.getStats$).toEqual(expected);
    });
  });
});
