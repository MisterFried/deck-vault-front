export interface SetInterface {
	name: string;
	code: string;
	date: Date;
	cards_amount: number;
}

export interface SetsByDateInterface {
	[key: string]: SetInterface[];
}
