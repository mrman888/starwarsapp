import { Injectable } from '@angular/core';
import { FilmItem } from '@shared/interfaces/film-item';
import { Angular2SwapiService, Film } from 'angular2-swapi';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class FilmsService {
	constructor(private swapiService: Angular2SwapiService) {}

	getFilmItems(): Observable<FilmItem[]> {
		return this.swapiService.getFilms().pipe(
			map((films: Film[]) =>
				films.map((film: Film) => {
					return {
						...film,
						isFavorite: false
					} as FilmItem;
				})
			)
		);
	}
}
