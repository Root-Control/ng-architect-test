import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';



@NgModule({
  declarations: [PublicHeaderComponent, PublicLayoutComponent],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
