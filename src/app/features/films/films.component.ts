import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FilmsService } from './films.service';
import { ImdbMovieItem } from './films.interface';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { switchMapTo } from 'rxjs/internal/operators/switchMapTo';

@Component({
	selector: 'app-films',
	templateUrl: './films.component.html',
	styleUrls: ['./films.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmsComponent implements OnInit {
	movies$: Observable<ImdbMovieItem[]>;
	counter = 0;
	event$ = new BehaviorSubject(true);

	constructor(private filmsService: FilmsService) {}

	ngOnInit(): void {
		this.movies$ = this.filmsService.getMoviesItems();
	}

	onMouseOver() {}

	refresh() {
		this.event$.next(true);

	}

	trackByFn(index, item: ImdbMovieItem) {
		return item.Title;
	}
}
