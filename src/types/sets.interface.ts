import {
	SetMonsterCardInterface,
	SetSpellCardInterface,
	SetTrapCardInterface,
} from "./cards.interface";

export interface SetInterface {
	name: string;
	code: string;
	date: Date;
	cardsAmount: number;
}

export interface SetsByYearInterface {
	year: number;
	sets: SetInterface[];
}

export interface SetVariantInterface {
	name: string;
	code: string;
	date: Date;
	cards: (
		| SetMonsterCardInterface
		| SetSpellCardInterface
		| SetTrapCardInterface
	)[];
}

export interface SetBreakdownInterface {
	name: string;
	date: Date;
	code: string;
	variants: SetVariantInterface[];
}
