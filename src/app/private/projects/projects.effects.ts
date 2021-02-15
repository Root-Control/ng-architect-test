import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as ProjectsActions from './projects.actions';



@Injectable()
export class ProjectsEffects {

  loadProjects$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(ProjectsActions.loadProjects),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        of([]).pipe(
          map(data => ProjectsActions.loadProjectsSuccess({ data })),
          catchError(error => of(ProjectsActions.loadProjectsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
