import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Angular2SwapiService, Film } from 'angular2-swapi';
import { Observable } from 'rxjs/internal/Observable';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
	films$: Observable<Film[]>;

	constructor(private _swapi: Angular2SwapiService) {}

	ngOnInit(): void {
		this.films$ = this._swapi.getFilms();
	}
}
