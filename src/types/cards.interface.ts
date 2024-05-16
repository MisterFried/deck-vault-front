// The base interface for all cards
export interface CardBaseInterface {
	id: number;
	name: string;
	type: string;
	category: string;
	description: string;
	archetype: string | null;
	banlist: "Unlimited" | "Limited" | "Semi-limited" | "Banned";
}

// Monster card without any additional infos
export interface MonsterCardInterface extends CardBaseInterface {
	attribute: "FIRE" | "WATER" | "WIND" | "LIGHT" | "DARK" | "DIVINE";
	level: number;
	atk: number;
	def: number;
	scale: number | null;
	link: number | null;
}

// Spell card without any additional info
export interface SpellCardInterface extends CardBaseInterface {
	category: "Spell Card";
	type: "Normal" | "Continuous" | "Quick-Play" | "Field" | "Ritual" | "Equip";
	attribute: null;
	level: null;
	atk: null;
	def: null;
	scale: null;
	link: null;
}

// Trap card without any additional info
export interface TrapCardInterface extends CardBaseInterface {
	category: "Trap Card";
	type: "Normal" | "Continuous" | "Counter";
	attribute: null;
	level: null;
	atk: null;
	def: null;
	scale: null;
	link: null;
}

// Monster card with additional info from a specific set
export interface SetMonsterCardInterface extends MonsterCardInterface {
	code: string;
	rarity: string[];
}

// Spell card with additional info from a specific set
export interface SetSpellCardInterface extends SpellCardInterface {
	code: string;
	rarity: string[];
}

// Trap card with additional info from a specific set
export interface SetTrapCardInterface extends TrapCardInterface {
	code: string;
	rarity: string[];
}

// Interface for a specific print of a card
export interface CardPrintInterface {
	id: number;
	rarity: string;
	code: string;
	set_name: string;
	set_code: string;
	set_date: Date;
}

// Monster card with additional information about all its prints
export interface MonsterCardWithPrintsInterface extends MonsterCardInterface {
	prints: CardPrintInterface[];
}

// Spell card with additional information about all its prints
export interface SpellCardWithPrintsInterface extends SpellCardInterface {
	prints: CardPrintInterface[];
}

// Trap card with additional information about all its prints
export interface TrapCardWithPrintsInterface extends TrapCardInterface {
	prints: CardPrintInterface[];
}
