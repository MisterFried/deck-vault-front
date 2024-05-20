// ** Import core packages

import CardLink from "@/components/CardLink";
import PageNavigation from "@/components/PageNavigation";
import PerPageSelect from "@/components/PerPageSelect";
import QueryParamsInput from "@/components/QueryParamsInput";
import {
	MonsterCardInterface,
	SpellCardInterface,
	TrapCardInterface,
} from "@/types/cards.interface";

// ** Import third party

// ** Import pages

// ** Import sub pages / sections

// ** Import components

// ** Import state manager

// ** Import hooks

// ** Import APIs

// ** Import utils / lib

// ** Import assets

// ** Import icons

// ** Import config

// ** Import styles

// ** Import Types

/**
 * Renders a card feed component with search and pagination functionality.
 *
 * @param cards - An array of cards to display in the feed.
 * @param totalPages - The total number of pages for pagination.
 * @return The rendered card feed component.
 */
export default function CardFeed({
	cards,
	totalPages,
}: {
	cards: (MonsterCardInterface | SpellCardInterface | TrapCardInterface)[];
	totalPages: number;
}) {
	return (
		<section className="flex flex-col gap-2 rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
			<div className="flex flex-col gap-2">
				<div className="flex gap-2">
					<QueryParamsInput queryParams="search" />
					<PerPageSelect />
				</div>
				<PageNavigation totalPages={totalPages} />
			</div>
			<div className="grid grid-cols-4 gap-x-2 gap-y-4">
				{cards.length === 0 ? (
					<p className="col-span-4 text-center">
						No cards matching your search were found !
					</p>
				) : (
					cards.map(card => <CardLink key={card.id} card={card} />)
				)}
			</div>
		</section>
	);
}
