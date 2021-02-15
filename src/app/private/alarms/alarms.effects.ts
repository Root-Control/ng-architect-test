import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AlarmsActions from './alarms.actions';



@Injectable()
export class AlarmsEffects {

  loadAlarms$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(AlarmsActions.loadAlarms),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        of([]).pipe(
          map(data => AlarmsActions.loadAlarmsSuccess({ data })),
          catchError(error => of(AlarmsActions.loadAlarmsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
