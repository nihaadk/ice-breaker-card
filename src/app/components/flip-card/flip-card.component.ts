import { CategoryEnum } from './../../model/category.enum';
import { StateEnum } from './../../model/state.enum';
import { Component, Input, OnInit } from '@angular/core';
import { CardData } from 'src/app/model/card-data';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
	selector: 'app-flip-card',
	templateUrl: './flip-card.component.html',
	styleUrls: [ './flip-card.component.scss' ],
	animations: [
		trigger('cardFlip', [
			state(
				StateEnum.DEFAULT,
				style({
					transform: 'none'
				})
			),
			state(
				StateEnum.FLIPPED,
				style({
					transform: 'rotateY(180deg)'
				})
			),
			transition('default => flipped', [ animate('400ms') ]),
			transition('flipped => default', [ animate('400ms') ]),
			transition('* => default', [ animate('400ms') ])
		])
	]
})
export class FlipCardComponent implements OnInit {
	@Input() questions: Array<CardData>;

	activeCard: CardData;

	constructor() {}

	ngOnInit(): void {
		this.activeCard = this.getRandomCard();
	}

	flipCard() {
		if (this.activeCard.state === StateEnum.DEFAULT) {
			this.activeCard.setState(StateEnum.FLIPPED);
		} else {
			this.activeCard.setState(StateEnum.DEFAULT);
			interval(200).pipe(take(1)).subscribe(() => {
				this.activeCard = this.getRandomCard();
			});
		}
	}

	getRandomCard(): CardData {
		const randomIndex = Math.floor(Math.random() * this.questions.length);
		return this.questions[randomIndex];
	}
}
