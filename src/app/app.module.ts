import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';

import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { IAppState } from './store/app.state';
import { StatsEffects } from './store/stats/stats.effects';
import * as fromStats from './store/stats/stats.reducer';

import { AppComponent } from './app.component';


const _reducers: ActionReducerMap<IAppState> = {
  [fromStats.statsFeatureKey]: fromStats.reducer
};

export function getReducers(): ActionReducerMap<IAppState> {
  return _reducers;
}

const effects = [StatsEffects];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot({ ...getReducers()}),
    EffectsModule.forRoot(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
