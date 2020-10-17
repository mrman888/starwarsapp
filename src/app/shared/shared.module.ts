import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { SearchInputModule } from './components/search-input/search-input.module';
import { MaterialModule } from './material.module';

@NgModule({
	declarations: [],
	imports: [CommonModule, FlexLayoutModule, MaterialModule, SearchInputModule],
	exports: [CommonModule, FormsModule, FlexLayoutModule, MaterialModule, SearchInputModule],
})
export class SharedModule {}
