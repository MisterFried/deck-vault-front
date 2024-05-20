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
import { SetVariantInterface } from "@/types/sets.interface";

/**
 * Renders a list of cards for a specific set variant.
 *
 * @param variant - The variant object containing information about the set variant.
 * @param variantCount - The count of the variant.
 * @return The JSX element representing the list of cards.
 */
export default function SetCardsList({
	variant,
	variantCount,
}: {
	variant: SetVariantInterface;
	variantCount: number;
}) {
	return (
		<article className="mb-6 rounded-sm border border-gray-300 bg-gray-50 p-2 shadow-sm last:mb-0">
			{variantCount > 1 && (
				<div className="mb-2 flex justify-between">
					<h3 className="font-semibold">{variant.name}</h3>
					<span className="text-sm font-light">
						Total : {variant.cards.length}
					</span>
				</div>
			)}
			<div className="grid grid-cols-4 gap-x-2 gap-y-4">
				{variant.cards.map((card, index) => (
					<CardLink key={`${card.code}-${index}`} card={card} />
				))}
			</div>
		</article>
	);
}
