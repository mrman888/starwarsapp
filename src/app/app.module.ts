import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';
import { Angular2SwapiModule } from 'angular2-swapi';
import { SharedModule } from './shared/shared.module';

@NgModule({
	bootstrap: [AppComponent],
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		Angular2SwapiModule,
		AppRoutingModule,
		CoreModule,
		FeaturesModule,
		SharedModule,
	],
	providers: [],
})
export class AppModule {}
