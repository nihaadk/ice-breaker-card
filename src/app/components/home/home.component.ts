import { Component, OnInit } from '@angular/core';
import { CardData } from 'src/app/model/card-data';
import { CategoryEnum } from 'src/app/model/category.enum';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
