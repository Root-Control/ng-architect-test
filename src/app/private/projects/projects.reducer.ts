import { Action, createReducer, on } from '@ngrx/store';
import * as ProjectsActions from './projects.actions';

export const projectsFeatureKey = 'projects';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(ProjectsActions.loadProjects, state => state),
  on(ProjectsActions.loadProjectsSuccess, (state, action) => state),
  on(ProjectsActions.loadProjectsFailure, (state, action) => state),

);

