import { createAction, props } from '@ngrx/store';

export const LOAD_APP = createAction('[App] Load App');

export const LOAD_DEFAULT_STORE = createAction('[App] Load Default Store');
export const LOAD_DEFAULT_STORE_SUCCESS = createAction('[App] Load Default Store Success');
export const LOAD_DEFAULT_STORE_FAILURE = createAction('[App] Load Default Store Failure');

export const LOAD_APP_SUCCESS = createAction('[App] Load App Success');
export const LOAD_APP_FAILURE = createAction('[App] Load App Failure');
