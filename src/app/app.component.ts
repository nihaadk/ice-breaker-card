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
		new CardData('Wenn du eine Gemüsesorte wärst,welche wäre das und warum? ', CategoryEnum.FUN),
		new CardData('Welches ist der schlechteste Film, den du jemals gesehen hast und warum?', CategoryEnum.FUN),
		new CardData('Über welche Zauberkraft verfügst du?', CategoryEnum.FUN),
		new CardData('Welches Tier repräsentiert deine heutige Stimmung?', CategoryEnum.FUN),
		new CardData('Was wäre ein No-Go wofür du sogar das Date verlassen würdest?', CategoryEnum.FUN),
		new CardData('Wenn du für einen Tag unsichtbar wärst, was würdest du tun?', CategoryEnum.FUN),
		new CardData('Wenn Zeitreisen möglich wären, in welche Zeit würdest du reisen und warum?', CategoryEnum.FUN),
		new CardData('Was wäre dein Warm-Up Song wenn du BoxerIn oder WrestlerIn wärst?', CategoryEnum.FUN),
		new CardData(
			'Wenn du auf einer einsamen Insel stranden würdest, welche Person sollte mit dabei sein? (aktuelle/r PartnerIn gilt nicht)',
			CategoryEnum.FUN
		),
		new CardData(
			'Bei welchem Lied beginnst du immer (innerlich oder effektiv) zu tanzen oder schunkeln?',
			CategoryEnum.FUN
		),

		new CardData('Was willst du bei diesem Workshop/ Meeting erreichen?', CategoryEnum.BUSINESS),
		new CardData('Was möchtest du zum vorliegenden Thema beitragen?', CategoryEnum.BUSINESS),
		new CardData(
			'Wenn du einen Wunsch für den heutigen Workshop hättest, wie würde er lauten?',
			CategoryEnum.BUSINESS
		),
		new CardData('Was gefällt dir am besten an dem Team in diesem Raum?', CategoryEnum.BUSINESS),
		new CardData('Was ist das Beste was wir heute erreichen können?', CategoryEnum.BUSINESS),
		new CardData(
			'Was hat dich gestört, als du dich für das heutige Treffen vorbereitet hast?',
			CategoryEnum.BUSINESS
		),
		new CardData('Welche Möglichkeiten siehst du in den Themen, die wir heute diskutieren?', CategoryEnum.BUSINESS),
		new CardData('Was für einen Bezug hast du zum heutigen Thema?', CategoryEnum.BUSINESS),
		new CardData('Was ist dein Wunsch an die Workshop-Leitung?', CategoryEnum.BUSINESS),
		new CardData(
			'Welcher Aspekte deiner Persönlichkeit müssen die andern zu Beginn des Workshops wissen?',
			CategoryEnum.BUSINESS
		),

		new CardData('Wo kannst du am besten arbeiten und warum?', CategoryEnum.CREATIVE),
		new CardData(
			'Was ist der wichtigste Tipp zur Bekämpfung von Ablenkung bei der Arbeit aus der Ferne?',
			CategoryEnum.CREATIVE
		),
		new CardData('Wie kannst du dich am besten entspannen?', CategoryEnum.CREATIVE),
		new CardData(
			'Wenn du frei wählen könntest, wärst du lieber ein/e Frühaufsteherin oder eine Nachteule? Warum?',
			CategoryEnum.CREATIVE
		),
		new CardData(
			'Was ist dein bevorzugtes Tool um effizient, kreativ und inspiriert zu sein?',
			CategoryEnum.CREATIVE
		),
		new CardData('Wie informierst du dich über neue Themen und Entwicklungen?', CategoryEnum.CREATIVE),
		new CardData('Von wem lernst du am meisten?', CategoryEnum.CREATIVE),
		new CardData(
			'Welcher Technologie-Trend wird in den nächsten 10 Jahren den grössten Einfluss auf deine Arbeit haben?',
			CategoryEnum.CREATIVE
		),
		new CardData('Was ist der beste geschäftliche Ratschlag den du bekommen hast?', CategoryEnum.CREATIVE),
		new CardData('Was ist das unkonventionellste was du je gemacht hast?', CategoryEnum.CREATIVE)
	];
}
