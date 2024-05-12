// ** Import core packages
import Link from "next/link";

// ** Import third party

// ** Import pages

// ** Import sub pages / sections

// ** Import components
import ArchetypeFeedInput from "./ArchetypeFeedInput";

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
 * Renders a feed of archetypes with the ability to filter them by name.
 *
 * @param archetypes - The array of archetype names to display.
 * @return The rendered ArchetypeFeed component.
 */

export default function ArchetypeFeed({
	archetypes,
}: {
	archetypes: string[];
}) {
	return (
		<section className="flex flex-col gap-2 rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
			<ArchetypeFeedInput />
			<div className="grid grid-cols-1 border-t border-gray-300">
				{archetypes.map(archetype => (
					<Link
						href={`/archetypes/${encodeURIComponent(archetype.toLowerCase().replaceAll(" ", "_"))}`}
						key={archetype}
						className="border-b border-l border-r border-gray-300 bg-white p-2 focus:z-10"
					>
						{archetype}
					</Link>
				))}
			</div>
		</section>
	);
}
