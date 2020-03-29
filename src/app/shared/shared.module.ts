import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [],
	imports: [CommonModule, FlexLayoutModule],
	exports: [MaterialModule, FlexLayoutModule]
})
export class SharedModule {}
