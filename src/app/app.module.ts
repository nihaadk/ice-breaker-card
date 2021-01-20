import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { CardFrontComponent } from './components/card-front/card-front.component';
import { CardBackComponent } from './components/card-back/card-back.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [
		AppComponent,
		FlipCardComponent,
		CardFrontComponent,
		CardBackComponent,
		SplashScreenComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
