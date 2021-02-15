import { createAction, props } from '@ngrx/store';

export const loadConfigurations = createAction(
  '[Configurations] Load Configurations'
);

export const loadConfigurationsSuccess = createAction(
  '[Configurations] Load Configurations Success',
  props<{ data: any }>()
);

export const loadConfigurationsFailure = createAction(
  '[Configurations] Load Configurations Failure',
  props<{ error: any }>()
);
