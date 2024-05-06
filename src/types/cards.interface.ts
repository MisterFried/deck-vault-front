export interface CardInterface {
	id: number;
	name: string;
	attribute: null | string;
	level: null | number;
	type: string;
	category: string;
	description: string;
	atk: null | number;
	def: null | number;
	archetype: null | string;
	link: null | number;
	scale: null | number;
	banlist: "Unlimited" | "Limited" | "Semi-limited" | "Banned";
}

export interface SetCardInterface extends CardInterface {
	code: string;
	rarity: Array<string>;
}
