import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FilmsService } from './films.service';
import { ImdbMovieItem } from './films.interface';

@Component({
	selector: 'app-films',
	templateUrl: './films.component.html',
	styleUrls: ['./films.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmsComponent implements OnInit {
	movies$: Observable<ImdbMovieItem[]>;
	counter = 0;

	constructor(private filmsService: FilmsService) {}

	ngOnInit(): void {
		this.movies$ = this.filmsService.getMoviesItems();
	}

	onMouseOver() {}

	refresh() {
		this.movies$ = this.filmsService.getMoviesItems();
	}

	trackByFn(index, item: ImdbMovieItem) {
		return item.Title;
	}
}
