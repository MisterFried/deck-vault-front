import { CardInterface } from "./cards.interface";

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

export interface SetDetailsInterface {
	set_name: string;
	set_code: string;
	set_date: Date;
	cards: CardInterface[];
}

export interface FullSetBreakdownInterface {
	name: string;
	date: Date;
	code: string;
	variants: SetDetailsInterface[];
}