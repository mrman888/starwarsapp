import { Component, OnInit, AfterViewInit, ChangeDetectorRef, AfterContentInit } from '@angular/core';
import { Angular2SwapiService, Film } from 'angular2-swapi';
import { FilmItem } from '../../shared/interfaces/film-item';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { FilmsService } from './films.service';

@Component({
	selector: 'app-films',
	templateUrl: './films.component.html',
	styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
	films$: Observable<FilmItem[]>;
	counter = 0;
	loading = false;

	constructor(private filmsService: FilmsService) {}

	ngOnInit(): void {
		this.films$ = this.filmsService.getFilmItems();
	}

	toggle(film: FilmItem): void {
		film.isFavorite = !film.isFavorite;
		this.counter++;
	}

	onMouseOver() {}

	refresh() {
		this.films$ = this.filmsService.getFilmItems();
	}

	trackByFn(index, item: Film) {
		return item.episode_id;
	}
}
