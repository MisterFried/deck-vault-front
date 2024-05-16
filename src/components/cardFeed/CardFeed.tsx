// ** Import core packages

// ** Import third party

// ** Import pages

// ** Import sub pages / sections

// ** Import components
import CardLink from "@/components/CardLink";

// ** Import state manager

// ** Import hooks

// ** Import APIs

// ** Import utils / lib

// ** Import assets

// ** Import icons

// ** Import config

// ** Import styles

// ** Import Types
import {
	MonsterCardInterface,
	SpellCardInterface,
	TrapCardInterface,
} from "@/types/cards.interface";

export default function CardFeed({
	cards,
}: {
	cards: (MonsterCardInterface | SpellCardInterface | TrapCardInterface)[];
}) {
	return (
		<div className="grid grid-cols-4 gap-x-2 gap-y-4">
			{cards.map(card => (
				<CardLink key={card.id} card={card} />
			))}
		</div>
	);
}
