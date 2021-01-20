import { Injectable } from '@angular/core';
import { CardData } from '../model/card-data';
import { CategoryEnum } from '../model/category.enum';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	constructor() {}

	getData(): Array<CardData> {
		return [
			new CardData('Q1', CategoryEnum.FUN),
			new CardData('Q2', CategoryEnum.FUN),
			new CardData('Q3', CategoryEnum.FUN),
			new CardData('Q4', CategoryEnum.FUN),
			new CardData('Q5', CategoryEnum.FUN),
			new CardData('Q6', CategoryEnum.FUN),
			new CardData('Q7', CategoryEnum.FUN),
			new CardData('Q8', CategoryEnum.FUN),
			new CardData('Q9', CategoryEnum.FUN),
			new CardData('Q10', CategoryEnum.FUN),

			new CardData('Q11', CategoryEnum.BUSINESS),
			new CardData('Q12', CategoryEnum.BUSINESS),
			new CardData('Q13', CategoryEnum.BUSINESS),
			new CardData('Q14', CategoryEnum.BUSINESS),
			new CardData('Q15', CategoryEnum.BUSINESS),
			new CardData('Q16', CategoryEnum.BUSINESS),
			new CardData('Q17', CategoryEnum.BUSINESS),
			new CardData('Q18', CategoryEnum.BUSINESS),
			new CardData('Q19', CategoryEnum.BUSINESS),
			new CardData('Q20', CategoryEnum.BUSINESS),

			new CardData('Q21', CategoryEnum.WORK),
			new CardData('Q22', CategoryEnum.WORK),
			new CardData('Q23', CategoryEnum.WORK),
			new CardData('Q24', CategoryEnum.WORK),
			new CardData('Q25', CategoryEnum.WORK),
			new CardData('Q26', CategoryEnum.WORK),
			new CardData('Q27', CategoryEnum.WORK),
			new CardData('Q28', CategoryEnum.WORK),
			new CardData('Q29', CategoryEnum.WORK),
			new CardData('Q30', CategoryEnum.WORK),
			new CardData('Q31', CategoryEnum.CREATIVE),
			new CardData('Q32', CategoryEnum.CREATIVE),
			new CardData('Q33', CategoryEnum.CREATIVE),
			new CardData('Q34', CategoryEnum.CREATIVE),
			new CardData('Q35', CategoryEnum.CREATIVE),
			new CardData('Q36', CategoryEnum.CREATIVE),
			new CardData('Q37', CategoryEnum.CREATIVE),
			new CardData('Q38', CategoryEnum.CREATIVE),
			new CardData('Q39', CategoryEnum.CREATIVE),
			new CardData('Q40', CategoryEnum.CREATIVE)
		];
	}
}
