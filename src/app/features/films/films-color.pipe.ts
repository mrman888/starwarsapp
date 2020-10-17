import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'color'
})
export class ColorPipe implements PipeTransform {
	counter = 0;

	constructor() { }

	transform(isFavorite: boolean): string {
		let color = '';
		if (isFavorite) {
			color = 'yellow';
		}

		this.counter++;
		console.log(`**set yellow color on card via pipe`);
		return color;
	}
}

