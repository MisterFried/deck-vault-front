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

/**
 * Renders a content section for the Banlist page, displaying a list of cards based on the given status.
 *
 * @param activeStatus - The active status of the Banlist page.
 * @param status - The status of the cards to be displayed.
 * @param cards - The array of cards to be displayed.
 * @return The rendered content section.
 */
export default async function BanlistContent({
	activeStatus,
	status,
	cards,
}: {
	activeStatus: string;
	status: "banned" | "limited" | "semi-limited";
	cards: (MonsterCardInterface | SpellCardInterface | TrapCardInterface)[];
}) {
	return (
		<div
			className={`col-span-3 border border-t-0 border-gray-300 bg-white p-2 ${status !== activeStatus && "hidden"}`}
		>
			<div className="grid grid-cols-4 gap-x-2 gap-y-4">
				{cards.map((card, index) => (
					<CardLink key={`${status}-${index}`} card={card} />
				))}
			</div>
		</div>
	);
}
