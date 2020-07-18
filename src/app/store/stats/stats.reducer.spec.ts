import * as fromStatsActions from './stats.actions';
import * as fromStatsReducer from './stats.reducer';


describe('Stats reducer', () => {
  describe('Get Stats', () => {
    it('should set the loading flag to true in state', () => {
      const action = new fromStatsActions.GetStats(1);
      const result = fromStatsReducer.reducer(fromStatsReducer.statsInitialState, action);

      expect(result).toEqual({ ...fromStatsReducer.statsInitialState, isLoading: true });
    });
  });

  describe('Get Stats Success', () => {
    it('should add stats to state', () => {
      const action = new fromStatsActions.GetStatsSuccess([1, 2]);
      const result = fromStatsReducer.reducer(fromStatsReducer.statsInitialState, action);

      expect(result).toEqual({
        ...fromStatsReducer.statsInitialState,
        stats: [1, 2],
        isLoading: false
      });
    });
  });

  describe('Get Stats Error', () => {
    it('should add an error to state', () => {
      const statsError = new Error('Error :(');
      const action = new fromStatsActions.GetStatsError(statsError);
      const result = fromStatsReducer.reducer(fromStatsReducer.statsInitialState, action);

      expect(result).toEqual({ ...fromStatsReducer.statsInitialState, error: statsError, isLoading: false });
    });
  });
});
