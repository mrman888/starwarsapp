import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FilmsModule } from './films/films.module';
import { OmniService } from './films/movies.service';


@NgModule({
	declarations: [],
	imports: [FilmsModule, SharedModule],
	exports: [FilmsModule],
	providers: [OmniService]
})
export class FeaturesModule {}
