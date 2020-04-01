import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { ImdbResponse, ImdbMovie, ImdbMovieItem } from './films.interface';
import { OmniService } from './movies.service';

@Injectable()
export class FilmsService {
	constructor(private omniService: OmniService) {}

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
