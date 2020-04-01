import { Component, OnInit } from '@angular/core';
import { ImdbMovie, ImdbMovieItem, ImdbResponse } from './films.interface';
import { OmniService } from './movies.service';

@Component({
	selector: 'app-films',
	templateUrl: './films.component.html',
	styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
	movies: ImdbMovieItem[] = [];
	counter = 0;
	loading = false;

	constructor(private omniService: OmniService) {}

	ngOnInit(): void {
		this.getMovies();
	}

	getMovies() {
		this.loading = true;
		this.omniService.getMovies('star wars').subscribe((response: ImdbResponse) => {
			this.movies = response.Search.map((movie: ImdbMovie) => {
				return {
					...movie,
					isFavorite: false
				} as ImdbMovieItem;
			});
			this.loading = false;
		});
	}

	toggle(movie: ImdbMovieItem): void {
		movie.isFavorite = !movie.isFavorite;
	}

	getColor(isFavorite: boolean): string {
		let color = '';
		if (isFavorite) {
			color = 'yellow';
		}

		this.counter++;
		console.log(`${this.counter}: set yellow color on card`);
		return color;
	}

	onMouseOver() {}

	refresh() {
		this.getMovies();
	}

	trackByFn(index, item: ImdbMovieItem) {
		return item.Title;
	}
}
