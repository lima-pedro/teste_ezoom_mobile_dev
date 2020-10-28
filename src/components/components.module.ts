import { NgModule } from '@angular/core';
import { ComponentsHeaderComponent } from './components-header/components-header';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [ComponentsHeaderComponent],
	imports: [IonicModule],
	exports: [ComponentsHeaderComponent]
})
export class ComponentsModule {}
