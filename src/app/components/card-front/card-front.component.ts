import { CategoryEnum } from './../../model/category.enum';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card-front',
	templateUrl: './card-front.component.html',
	styleUrls: [ './card-front.component.scss' ]
})
export class CardFrontComponent {
	@Input() content: string = 'Not work';
	@Input() category: CategoryEnum;

	getImage(): string {
		return `assets/img/${this.category}.svg`;
	}
}
