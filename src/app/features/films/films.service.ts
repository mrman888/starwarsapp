import { Injectable } from '@angular/core';
import { Angular2SwapiService, Film } from 'angular2-swapi';
import { Observable } from 'rxjs/internal/Observable';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { FilmItem, ImdbResponse, ImdbMovie, ImdbMovieItem } from './films.interface';
import { OmniService } from './movies.service';

@Injectable()
export class FilmsService {
	constructor(private swapiService: Angular2SwapiService, private omniService: OmniService) {}

	getFilmItems(): Observable<FilmItem[]> {
		return this.swapiService.getFilms(1).pipe(
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

	getMoviesItems(): Observable<ImdbMovieItem[]> {
		return this.omniService.getMovies('star wars').pipe(
			distinctUntilChanged(),
			map((response: ImdbResponse) =>
				response.Search.map((movie: ImdbMovie) => {
					return {
						...movie,
						isFavorite: false
					} as ImdbMovieItem;
				})
			)
		);
	}
}
