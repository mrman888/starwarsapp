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
