import { Action, createReducer, on } from '@ngrx/store';
import * as ConfigurationsActions from './configurations.actions';

export const configurationsFeatureKey = 'configurations';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(ConfigurationsActions.loadConfigurations, state => state),
  on(ConfigurationsActions.loadConfigurationsSuccess, (state, action) => state),
  on(ConfigurationsActions.loadConfigurationsFailure, (state, action) => state),

);

