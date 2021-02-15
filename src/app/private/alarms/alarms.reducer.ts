import { Action, createReducer, on } from '@ngrx/store';
import * as AlarmsActions from './alarms.actions';

export const alarmsFeatureKey = 'alarms';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(AlarmsActions.loadAlarms, state => state),
  on(AlarmsActions.loadAlarmsSuccess, (state, action) => state),
  on(AlarmsActions.loadAlarmsFailure, (state, action) => state),

);

