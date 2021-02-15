import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectChooseComponent } from './project-choose/project-choose.component';

const routes: Routes = [{
	path: 'projects', 
	component: ProjectChooseComponent
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
