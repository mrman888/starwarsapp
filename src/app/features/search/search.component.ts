import { Component, OnInit, AfterViewInit, ChangeDetectorRef, AfterContentInit } from '@angular/core';
import { Angular2SwapiService, Film } from 'angular2-swapi';
import { SearchResultFilm } from './../../shared/interfaces/search-result-film';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterContentInit {
	films: SearchResultFilm[] = [];
	counter = 0;

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
		this.counter++;
	}

	getFavoriteText(isFavorite: boolean): string {
		let text = '';
		if (isFavorite) {
			text = 'Favorite';
		} else {
			text = '';
		}

		this.counter++;
		console.log(this.counter);
		return text;
	}

	ok() {}

	ngAfterContentInit() {}
}
