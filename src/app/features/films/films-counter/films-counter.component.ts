import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ImdbMovieItem } from '../films.interface';

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

	log() {
		console.log('films counter is called');
	}
}
