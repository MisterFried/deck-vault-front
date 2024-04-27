// ** Import core packages
import Link from "next/link";

// ** Import third party

// ** Import pages

// ** Import sub pages / sections

// ** Import components
import ScrollTopButton from "@/components/ScrollTopButton";

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
			<h1 className="text-2xl font-bold" id="archetypes">
				Archetypes
			</h1>
			<section className="flex flex-col">
				<p>
					A detailed list of all the existing archetypes in the YuGiOh
					TCG. Click on an archetypes to see the detailed list of
					cards.
				</p>
				<p className="text-sm font-light">
					Note : a card can only be in one archetype
				</p>
			</section>
			<section className="grid grid-cols-1 border-t border-main-500">
				{archetypes.map(archetype => (
					<Link
						href={`/archetypes/${archetype}`}
						key={archetype}
						className="border-b border-l border-r border-main-600 p-2"
					>
						{archetype}
					</Link>
				))}
			</section>
			<ScrollTopButton />
		</main>
	);
}
