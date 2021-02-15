import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAlarms from './alarms.reducer';

export const selectAlarmstate = createFeatureSelector<fromAlarms.State>(
  fromAlarms.alarmsFeatureKey
);
