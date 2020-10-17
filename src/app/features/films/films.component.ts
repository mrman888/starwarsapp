import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { ImdbMovieItem } from './films.interface';
import { FilmsService } from './films.service';

@Component({
	selector: 'app-films',
	templateUrl: './films.component.html',
	styleUrls: ['./films.component.scss'],
	//changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsComponent implements OnInit {
	movies$: Observable<ImdbMovieItem[]>;
	movies: ImdbMovieItem[];

	counter = 0;
	event$ = new BehaviorSubject(true);
	searchText = 'star wars';

	constructor(private filmsService: FilmsService) {}

	ngOnInit(): void {
		//this.movies$ = this.filmsService.searchMoviesItems(this.searchText);
		this.filmsService.searchMoviesItems(this.searchText).subscribe((movies) => {
			this.movies = movies;
		});
	}

	onMouseOver() {}

	refresh() {
		this.event$.next(true);
	}

	trackByFn(index, item: ImdbMovieItem) {
		return item.Title;
	}

	onSearch(searchText: string) {
		this.searchText = searchText;
		this.filmsService.searchMoviesItems(this.searchText).subscribe((movies) => {
			this.movies = movies;
		});
	}
}
