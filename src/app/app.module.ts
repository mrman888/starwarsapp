import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';

@NgModule({
	bootstrap: [AppComponent],
	declarations: [AppComponent],
	imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule, CoreModule, FeaturesModule],
	providers: []
})
export class AppModule {}
