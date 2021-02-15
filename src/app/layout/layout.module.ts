import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { PublicModule } from './public/public.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminModule,
    PublicModule
  ]
})
export class LayoutModule { }
