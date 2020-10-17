import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input.component';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [SearchInputComponent],
	imports: [CommonModule, MaterialModule, FlexLayoutModule],
	exports: [SearchInputComponent],
})
export class SearchInputModule {}
