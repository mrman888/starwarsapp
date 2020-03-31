import { Film } from 'angular2-swapi';

export interface FilmItem extends Film {
	isFavorite: boolean;
}
