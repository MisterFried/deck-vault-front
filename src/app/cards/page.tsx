// ** Import core packages

// ** Import third party

// ** Import pages

// ** Import sub pages / sections

// ** Import components
import CardFeed from "../../components/CardFeed";

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
interface CardsResponseInterface {
	total: number;
	cards: (MonsterCardInterface | SpellCardInterface | TrapCardInterface)[];
}

/**
 * Retrieves the list of cards from the server.
 *
 * @return An array of CardInterface objects representing the cards.
 */
async function getCards(search: string, perPage: number, page: number) {
	try {
		const response = await fetch(
			`http://localhost:3000/cards/${search}?page=${page}&perPage=${perPage}`
		);

		if (!response.ok) throw new Error(response.statusText);

		const results: CardsResponseInterface = await response.json();

		return results;
	} catch (error) {
		console.error(error);
	}
}

/**
 * Renders the Cards page, which displays a detailed list of existing cards in the YuGiOh TCG.
 *
 * @param searchParams - An optional object containing search parameters:
 *   - search: A string representing the search term.
 *   - perPage: A string representing the number of cards per page.
 *   - page: A string representing the current page number.
 * @return The Cards page component.
 */
export default async function Cards({
	searchParams,
}: {
	searchParams?: { search?: string; perPage?: string; page?: string };
}) {
	const search = searchParams?.search ?? "";
	const perPage = Number(searchParams?.perPage ?? "10");
	const page = Number(searchParams?.page ?? "1");

	const results = await getCards(search, perPage, page);

	let totalPages = 0;
	if (results) {
		totalPages = Math.ceil(results.total / perPage);
	}

	return (
		<main className="flex grow flex-col gap-4 p-2">
			<section className="flex flex-col rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
				<h1 className="text-2xl font-bold">Cards</h1>
				<p>
					A detailed list of all the existing cards in the YuGiOh TCG.
				</p>
			</section>
			<CardFeed cards={results.cards} totalPages={totalPages} />
		</main>
	);
}
