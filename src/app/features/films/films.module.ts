import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films.component';
import { ColorPipe } from './films-color.pipe';
import { FilmsService } from './films.service';
import { FavoritesComponent } from './favorites/favorites.component';
import { FilmsCounterComponent } from './films-counter/films-counter.component';
import { OmniService } from './omni.service';

@NgModule({
	declarations: [FilmsComponent, ColorPipe, FavoritesComponent, FilmsCounterComponent],
	imports: [SharedModule, FilmsRoutingModule],
	providers: [FilmsService, OmniService],
})
export class Films {}
