import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { Films } from './films/films.module';

@NgModule({
	declarations: [],
	imports: [Films, SharedModule],
	exports: [Films]
})
export class FeaturesModule {}
