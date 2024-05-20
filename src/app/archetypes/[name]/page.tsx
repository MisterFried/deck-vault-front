// ** Import core packages

// ** Import third party

// ** Import pages

// ** Import sub pages / sections

// ** Import components
import CardFeed from "@/components/CardFeed";

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

// Types
interface ArchetypeCardsResponseInterface {
	archetype: string;
	total: number;
	cards: (MonsterCardInterface | SpellCardInterface | TrapCardInterface)[];
}

/**
 * Retrieves the cards associated with a given archetype name from the server.
 *
 * @param name - The name of the archetype.
 * @return An array of CardInterface objects representing the cards associated with the archetype.
 */
async function getArchetypeCards(
	name: string,
	search: string,
	perPage: number,
	page: number
) {
	try {
		const response = await fetch(
			`http://localhost:3000/archetypes/${name}?search=${search}&page=${page}&perPage=${perPage}`
		);

		if (!response.ok) throw new Error(response.statusText);

		const results: ArchetypeCardsResponseInterface = await response.json();

		return results;
	} catch (error) {
		console.error(error);
	}
}

/**
 * Renders the Archetype page based on the archetype name provided in the parameters.
 *
 * @param params - An object containing the archetype name.
 * @return The rendered Archetype page.
 */
export default async function Archetype({
	params,
	searchParams,
}: {
	params: { name: string };
	searchParams?: { search?: string; page?: string; perPage?: string };
}) {
	const search = searchParams?.search ?? "";
	const perPage = Number(searchParams?.perPage ?? "10");
	const page = Number(searchParams?.page ?? "1");

	const results = await getArchetypeCards(params.name, search, perPage, page);

	if (!results) {
		return (
			<main className="flex grow flex-col gap-4 p-2">
				<section className="flex flex-col gap-4 rounded-sm border border-gray-300 bg-white p-2 shadow-sm"></section>
				<h1>Something went wrong</h1>
			</main>
		);
	}

	if (results.total === -1) {
		return (
			<main className="flex grow flex-col gap-4 p-2">
				<section className="flex flex-col gap-4 rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
					<h1>Something went wrong</h1>
					<p>The archetype you are searching for does not exist</p>
				</section>
			</main>
		);
	}

	let totalPages = 0;
	totalPages = Math.ceil(results.total / perPage);

	return (
		<main className="flex grow flex-col gap-4 p-2">
			<section className="flex flex-col gap-4 rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
				<h1 className="text-2xl font-bold">{results.archetype}</h1>
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
					List of all the cards that belongs in the{" "}
					{results.archetype} archetype.
				</p>
				<CardFeed cards={results.cards} totalPages={totalPages} />
			</section>
		</main>
	);
}
