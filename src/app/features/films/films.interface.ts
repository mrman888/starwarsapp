import { Film } from 'angular2-swapi';

export interface FilmItem extends Film {
	isFavorite: boolean;
}

export interface ImdbResponse {
	Search: ImdbMovie[];
}

export interface ImdbMovie {
	Title: string;
	Year: string;
	Poster: string;
	imdbID: string;
	Type: string;
}

export interface ImdbMovieItem extends ImdbMovie {
	isFavorite: boolean;
}
