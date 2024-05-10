// ** Import core packages

// ** Import third party

// ** Import pages

// ** Import sub pages / sections

// ** Import components
import CardDisplay from "@/components/cardFeed/CardDisplay";
import ScrollTopButton from "@/components/globalLayout/ScrollTopButton";

// ** Import state manager

// ** Import hooks

// ** Import APIs

// ** Import utils / lib

// ** Import assets

// ** Import icons

// ** Import config

// ** Import styles

// ** Import Types
import { CardInterface } from "@/types/cards.interface";

/**
 * Retrieves the cards associated with a given archetype name from the server.
 *
 * @param name - The name of the archetype.
 * @return An array of CardInterface objects representing the cards associated with the archetype.
 */
async function getArchetypeCards(name: string) {
	const response = await fetch(`http://localhost:3000/archetypes/${name}`);
	if (!response.ok) throw new Error(response.statusText);

	const cards: CardInterface[] = await response.json();

	return cards;
}

/**
 * Renders the Archetype page based on the archetype name provided in the parameters.
 *
 * @param params - An object containing the archetype name.
 * @return The rendered Archetype page.
 */
export default async function Archetype({
	params,
}: {
	params: { name: string };
}) {
	const cards = await getArchetypeCards(params.name);
	const archetypeName = cards[0].archetype;

	return (
		<main className="flex grow flex-col gap-4 p-2">
			<section className="flex flex-col gap-4 rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
				<h1 className="text-2xl font-bold">{archetypeName}</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Perspiciatis quos voluptatum quidem earum esse debitis quae
					error dolore dolorum quia fuga placeat eos porro illo
					assumenda pariatur similique, aspernatur praesentium?
				</p>
			</section>
			<section className="flex flex-col gap-2 rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
				<h2 className="text-xl font-bold">Cards</h2>
				<p>
					List of all the cards that belongs in the {archetypeName}{" "}
					archetype.
				</p>
				<CardDisplay cards={cards} />
			</section>
			<ScrollTopButton />
		</main>
	);
}
