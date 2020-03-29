import { Film } from 'angular2-swapi';

export interface SearchResultFilm extends Film {
	isFavorite: boolean;
}
