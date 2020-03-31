import { Component, OnInit, AfterViewInit, ChangeDetectorRef, AfterContentInit } from '@angular/core';
import { Angular2SwapiService, Film } from 'angular2-swapi';
import { FilmItem } from '../../shared/interfaces/film-item';

@Component({
	selector: 'app-films',
	templateUrl: './films.component.html',
	styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
	films: FilmItem[] = [];
	counter = 0;

	constructor(private swapiService: Angular2SwapiService) {}

	ngOnInit(): void {
		this.getFilms();
	}

	toggle(film: FilmItem): void {
		film.isFavorite = !film.isFavorite;
		this.counter++;
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
		this.getFilms();
	}

	getFilms() {
		this.swapiService.getFilms().subscribe((filmsResponse: Film[]) => {
			this.films = [];
			filmsResponse.forEach((film) => {
				this.films.push({
					...film,
					isFavorite: false
				});
			});
		});
	}
}
