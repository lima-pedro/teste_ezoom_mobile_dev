import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhePage } from './detalhe';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DetalhePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DetalhePage),
  ],
})
export class DetalhePageModule {}
