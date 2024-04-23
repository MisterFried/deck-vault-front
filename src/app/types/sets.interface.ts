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
