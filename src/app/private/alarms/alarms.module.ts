import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { StoreModule } from '@ngrx/store';
import * as fromAlarms from './alarms.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AlarmsEffects } from './alarms.effects';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAlarms.alarmsFeatureKey, fromAlarms.reducer),
    EffectsModule.forFeature([AlarmsEffects])
  ]
})
export class AlarmsModule { }
