import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectChooseComponent } from './project-choose/project-choose.component';
import { StoreModule } from '@ngrx/store';
import * as fromProjects from './projects.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProjectsEffects } from './projects.effects';
import { ProjectsRoutingModule } from './projects-routing.module';


@NgModule({
  declarations: [ProjectChooseComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromProjects.projectsFeatureKey, fromProjects.reducer),
    EffectsModule.forFeature([ProjectsEffects]),
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
