// ** Import core packages

// ** Import third party

// ** Import pages

// ** Import sub pages / sections

// ** Import components
import ArchetypeFeed from "@/components/ArchetypeFeed";

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
 * Retrieves the list of archetypes from the server.
 *
 * @return An array of archetype names.
 */
async function getArchetypes() {
	const response = await fetch("http://localhost:3000/archetypes");
	const archetypes: string[] = await response.json();

	archetypes.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

	return archetypes;
}

/**
 * Renders the Archetypes page, which displays a list of archetypes from the YuGiOh TCG.
 *
 * @return The rendered Archetypes page.
 */
export default async function Archetypes() {
	const archetypes = await getArchetypes();

	return (
		<main className="flex grow flex-col gap-4 p-2">
			<section className="flex flex-col gap-2 rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
				<h1 className="text-2xl font-bold" id="archetypes">
					Archetypes
				</h1>
				<p>
					A detailed list of all the existing archetypes in the YuGiOh
					TCG. Click on an archetypes to see the detailed list of
					cards.
				</p>
				<p className="text-sm font-light">
					Note : a card can only be in one archetype
				</p>
			</section>
			<ArchetypeFeed archetypes={archetypes} />
		</main>
	);
}
