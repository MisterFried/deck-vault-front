// ** Import core packages

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
import { SetVariantInterface } from "@/types/sets.interface";

/**
 * Renders a list of set variants.
 *
 * @param variants - The array of set variants.
 * @return The rendered set variants list.
 */
export default function SetVariantsList({
	variants,
}: {
	variants: SetVariantInterface[];
}) {
	return (
		<section className="flex flex-col rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
			<h2 className="text-xl font-semibold">Variants</h2>
			<p className="mb-2 text-sm font-light">
				Multiple variants of this sets exists. See the list below for
				details.
			</p>
			<div className="flex flex-col">
				{variants.map((set, index) => (
					<div
						key={`${set.code}-${index}`}
						className="grid grid-cols-[1fr_auto]"
					>
						<span className="font-medium">{set.name}</span>
						<span className="text-sm font-light">{`${set.date.getUTCDate()}/${set.date.getUTCMonth() + 1}/${set.date.getUTCFullYear()}`}</span>
					</div>
				))}
			</div>
		</section>
	);
}
