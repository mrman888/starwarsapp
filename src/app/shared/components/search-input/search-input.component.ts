import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	EventEmitter,
	Output,
	ViewChild,
	ElementRef,
	AfterViewInit,
	Input,
} from '@angular/core';

@Component({
	selector: 'app-search-input',
	templateUrl: './search-input.component.html',
	styleUrls: ['./search-input.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent implements OnInit, AfterViewInit {
	@Input()
	searchText = '';

	@ViewChild('searchInput', { static: false })
	searchInputField: ElementRef;

	@Output()
	search = new EventEmitter<string>();

	constructor() {}

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		this.searchInputField.nativeElement.focus();
	}

	searchTextChanged(searchText: string) {
		this.searchText = searchText;
	}

	onSearch() {
		this.search.emit(this.searchText);
	}
}
