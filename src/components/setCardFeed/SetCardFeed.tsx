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
import { SetCardInterface } from "@/types/cards.interface";

/**
 * Renders a feed of set cards.
 *
 * @param cards - The array of cards to render.
 * @return The JSX element representing the set card feed.
 */
export default function SetCardFeed({ cards }: { cards: SetCardInterface[] }) {
	return (
		<div className="grid grid-cols-4 gap-x-2 gap-y-4">
			{cards.map((card, index) => (
				<CardLink key={`${card.code}-${index}`} card={card} />
			))}
		</div>
	);
}
