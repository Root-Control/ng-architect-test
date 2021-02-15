import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromConfigurations from './configurations.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ConfigurationsEffects } from './configurations.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromConfigurations.configurationsFeatureKey, fromConfigurations.reducer),
    EffectsModule.forFeature([ConfigurationsEffects])
  ]
})
export class ConfigurationsModule { }
