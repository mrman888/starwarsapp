import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SearchRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films.component';

@NgModule({
	declarations: [FilmsComponent],
	imports: [SharedModule, SearchRoutingModule]
})
export class Films {}
