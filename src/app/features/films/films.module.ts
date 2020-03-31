import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films.component';
import { ColorPipe } from './films-color.pipe';
import { FilmsService } from './films.service';

@NgModule({
	declarations: [FilmsComponent, ColorPipe],
	imports: [SharedModule, FilmsRoutingModule],
	providers: [FilmsService]
})
export class Films {}
