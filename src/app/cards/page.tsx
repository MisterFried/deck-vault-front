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
 * Retrieves the list of cards from the server.
 *
 * @return An array of CardInterface objects representing the cards.
 */
async function getCards() {
	const response = await fetch("http://localhost:3000/cards");
	if (!response.ok) throw new Error(response.statusText);

	const cards: CardInterface[] = await response.json();

	return cards;
}

export default async function Cards() {
	const cards = await getCards();

	return (
		<main className="flex grow flex-col gap-4 p-2">
			<section className="flex flex-col rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
				<h1 className="text-2xl font-bold">Cards</h1>
				<p>
					A detailed list of all the existing cards in the YuGiOh TCG.
				</p>
			</section>

			<section>
				<CardDisplay cards={cards} />
				<ScrollTopButton />
			</section>
		</main>
	);
}
