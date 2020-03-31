import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { FilmItem, ImdbMovieItem } from '../films.interface';

@Component({
	selector: 'app-films-counter',
	templateUrl: './films-counter.component.html',
	styleUrls: ['./films-counter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmsCounterComponent implements OnInit, OnChanges {
	@Input()
	movies: ImdbMovieItem[];

	constructor() {}

	ngOnInit(): void {}

	ngOnChanges(changes: SimpleChanges) {
		const movies = changes['movies'];
	}
}
