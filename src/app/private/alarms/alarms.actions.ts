import { createAction, props } from '@ngrx/store';

export const loadAlarms = createAction(
  '[Alarms] Load Alarms'
);

export const loadAlarmsSuccess = createAction(
  '[Alarms] Load Alarms Success',
  props<{ data: any }>()
);

export const loadAlarmsFailure = createAction(
  '[Alarms] Load Alarms Failure',
  props<{ error: any }>()
);
