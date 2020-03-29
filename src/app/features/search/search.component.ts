import { SearchResultFilm } from './../../shared/interfaces/search-result-film';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Angular2SwapiService, Film } from 'angular2-swapi';
import { Observable } from 'rxjs/internal/Observable';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	films: SearchResultFilm[] = [];

	constructor(private _swapi: Angular2SwapiService) {}

	ngOnInit(): void {
		this._swapi.getFilms().subscribe((filmsResponse: Film[]) => {
			filmsResponse.forEach((film) => {
				this.films.push({
					...film,
					isFavorite: false
				});
			});
		});
	}

	toggle(film: SearchResultFilm): void {
		film.isFavorite = !film.isFavorite;
	}
}
