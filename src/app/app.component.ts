import { StateEnum } from './model/state.enum';
import { CategoryEnum } from './model/category.enum';
import { Component } from '@angular/core';
import { CardData } from './model/card-data';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	questions: Array<CardData> = [
		new CardData('Wenn du eine Gemüsesorte wärst, welche wäre das und warum?', CategoryEnum.FUN, StateEnum.DEFAULT),
		new CardData(
			'Der letzte Fehler den du gemacht hast ist der Titel deiner Autobiografie- Wie heisst Sie demnach?',
			CategoryEnum.CREATIVE,
			StateEnum.DEFAULT
		),
		new CardData('Über welche Zauberkraft verfügst du?', CategoryEnum.FUN, StateEnum.DEFAULT)
	];
}
