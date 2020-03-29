import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { SearchModule } from './search/search.module';

@NgModule({
	declarations: [],
	imports: [SearchModule, SharedModule],
	exports: [SearchModule]
})
export class FeaturesModule {}
