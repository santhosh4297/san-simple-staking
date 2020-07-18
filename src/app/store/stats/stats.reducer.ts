import * as fromRoot from '../app.state';
import * as fromStatsActions from './stats.actions';

export const statsFeatureKey = 'stats';

export interface IStatsState extends fromRoot.IAppState {
  stats: any[];
  isLoading: boolean;
  error: any;
}

export const statsInitialState: IStatsState = {
  stats: null,
  isLoading: false,
  error: null
};

export function reducer(state = statsInitialState, action: fromStatsActions.StatsAction) {
  switch (action.type) {
    case fromStatsActions.EStatsType.GetStats:
      return { ...state, isLoading: true };

    case fromStatsActions.EStatsType.GetStatsSuccess:
      return { ...state, isLoading: false, stats: action.payload };

    case fromStatsActions.EStatsType.GetStatsError:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
}
