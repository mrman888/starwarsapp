import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films.component';

@NgModule({
	declarations: [FilmsComponent],
	imports: [SharedModule, FilmsRoutingModule]
})
export class Films {}
