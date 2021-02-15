import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LOAD_APP, LOAD_APP_SUCCESS, LOAD_APP_FAILURE, LOAD_DEFAULT_STORE, LOAD_DEFAULT_STORE_FAILURE, LOAD_DEFAULT_STORE_SUCCESS } from './app.actions';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { loadProjects } from './private/projects/projects.actions';
import { loadConfigurations } from './private/configurations/configurations.actions';
import { loadAlarms } from './private/alarms/alarms.actions';

@Injectable()
export class AppEffects {
  loadApplication$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(LOAD_APP),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        of([]).pipe(
          switchMap(data => {
            return [LOAD_APP_SUCCESS(), LOAD_DEFAULT_STORE()];
          }),
          catchError(error => of(LOAD_APP_FAILURE())))
      )
    );
  });

  loadDefaultStore$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(LOAD_DEFAULT_STORE),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        of([]).pipe(
          switchMap(data => {
            return [loadProjects(), loadConfigurations(), loadAlarms(), LOAD_DEFAULT_STORE_SUCCESS()];
          }),
          catchError(error => of(LOAD_DEFAULT_STORE_FAILURE())))
      )
    );
  });


  constructor(private actions$: Actions) {}

}
