import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromConfigurations from './configurations.reducer';

export const selectConfigurationstate = createFeatureSelector<fromConfigurations.State>(
  fromConfigurations.configurationsFeatureKey
);
