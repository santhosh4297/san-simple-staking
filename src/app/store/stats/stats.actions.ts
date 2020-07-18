import { Action } from '@ngrx/store';

export enum EStatsType {
  GetStats = '[Stats] get stats',
  GetStatsSuccess = '[Stats] get Stats success',
  GetStatsError = '[Stats] get Stats error'
}

export class GetStats implements Action {
  public readonly type = EStatsType.GetStats;
  constructor(public limit: number) {}
}

export class GetStatsSuccess implements Action {
  public readonly type = EStatsType.GetStatsSuccess;
  constructor(public payload?: any) {}
}

export class GetStatsError implements Action {
  public readonly type = EStatsType.GetStatsError;
  constructor(public payload?: any) {}
}

export type StatsAction = GetStats | GetStatsSuccess | GetStatsError;
