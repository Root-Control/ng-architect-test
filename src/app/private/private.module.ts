import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsModule } from './projects/projects.module';
import { AlarmsModule } from './alarms/alarms.module';
import { ConfigurationsModule } from './configurations/configurations.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProjectsModule,
    AlarmsModule,
    ConfigurationsModule
  ]
})
export class PrivateModule { }
