import { SetCardInterface } from "./cards.interface";

export interface SetInterface {
	name: string;
	code: string;
	date: Date;
	cards_amount: number;
}

export interface SetsByYearInterface {
	year: number;
	sets: SetInterface[];
}

export interface SetVariantInterface {
	name: string;
	code: string;
	date: Date;
	cards: SetCardInterface[];
}

export interface SetBreakdownInterface {
	name: string;
	date: Date;
	code: string;
	variants: SetVariantInterface[];
}
