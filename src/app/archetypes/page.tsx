// ** Import core packages

// ** Import third party

// ** Import pages

// ** Import sub pages / sections

// ** Import components
import ArchetypeFeed from "./ArchetypeFeed";

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
 * If provided with a search term, it will filter the list of archetypes.
 *
 * @return An array of archetype names.
 */
async function getArchetypes(term: string) {
	const response = await fetch("http://localhost:3000/archetypes");
	const archetypes: string[] = await response.json();

	archetypes.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

	if (!term) return archetypes;

	return archetypes.filter(archetype =>
		archetype.toLowerCase().includes(term.toLowerCase())
	);
}

/**
 * Renders the Archetypes page, which displays a list of archetypes from the YuGiOh TCG.
 * @param searchParams - The search term to filter the list of archetypes.
 * 
 * @return The rendered Archetypes page.
 */
export default async function Archetypes({
	searchParams,
}: {
	searchParams?: { search?: string };
}) {
	const term = searchParams?.search ?? "";
	const archetypes = await getArchetypes(term);

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
