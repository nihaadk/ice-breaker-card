import { Component, OnInit } from '@angular/core';
import { CardData } from 'src/app/model/card-data';
import { DataService } from 'src/app/service/data.service';

@Component({
	selector: 'app-card-container',
	templateUrl: './card-container.component.html',
	styleUrls: [ './card-container.component.scss' ]
})
export class CardContainerComponent implements OnInit {
	questions: Array<CardData>;

	constructor(private dataService: DataService) {}

	ngOnInit(): void {
		this.questions = this.dataService.getData();
	}
}
