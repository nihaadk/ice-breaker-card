import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FlipCardComponent } from './components/flip-card/flip-card.component';
import { CardFrontComponent } from './components/card-front/card-front.component';
import { CardBackComponent } from './components/card-back/card-back.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [ AppComponent, FlipCardComponent, CardFrontComponent, CardBackComponent ],
	imports: [ BrowserModule, BrowserAnimationsModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
