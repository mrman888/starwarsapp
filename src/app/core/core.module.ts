import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
	declarations: [NavigationComponent],
	imports: [CommonModule],
	exports: [NavigationComponent]
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error('CoreModule has already been loaded. You should only import Core modules in the AppModule only.');
		}
	}
}
