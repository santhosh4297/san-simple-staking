import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromStatsReducer from './stats.reducer';

export const selectBaseFeature = createFeatureSelector<fromStatsReducer.IStatsState>('stats');

export const getLoading = createSelector(selectBaseFeature, (state: fromStatsReducer.IStatsState) => state.isLoading);

export const getStats = createSelector(selectBaseFeature, (state: fromStatsReducer.IStatsState) => state.stats);

export const getError = createSelector(selectBaseFeature, (state: fromStatsReducer.IStatsState) => state.error);
