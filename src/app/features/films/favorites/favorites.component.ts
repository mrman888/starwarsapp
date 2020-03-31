import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FilmItem, ImdbMovieItem } from '../films.interface';

@Component({
	selector: 'app-favorites',
	templateUrl: './favorites.component.html',
	styleUrls: ['./favorites.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnInit {
	@Input()
	movie: ImdbMovieItem;

	constructor() {}

	ngOnInit(): void {}

	toggle(movie: ImdbMovieItem): void {
		movie.isFavorite = !movie.isFavorite;
	}
}
