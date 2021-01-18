import { CategoryEnum } from './category.enum';
import { StateEnum } from './state.enum';

export class CardData {
	question: string;
	category: CategoryEnum;
	state: StateEnum;

	constructor(_question: string, _category: CategoryEnum) {
		this.question = _question;
		this.category = _category;
		this.state = StateEnum.DEFAULT;
	}

	setState(_state: StateEnum) {
		this.state = _state;
	}
}
