import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as ConfigurationsActions from './configurations.actions';



@Injectable()
export class ConfigurationsEffects {

  loadConfigurations$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(ConfigurationsActions.loadConfigurations),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => ConfigurationsActions.loadConfigurationsSuccess({ data })),
          catchError(error => of(ConfigurationsActions.loadConfigurationsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
