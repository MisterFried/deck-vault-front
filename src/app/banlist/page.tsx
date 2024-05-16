// ** Import core packages

// ** Import third party

// ** Import pages

// ** Import sub pages / sections

// ** Import components
import BanlistTabs from "@/components/BanlistTabs";

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

/**
 * Retrieves the list of banned, limited, and semi-limited cards from the server.
 *
 * @return An object containing arrays of banned, limited, and semi-limited cards.
 */
async function getBanlistCards() {
	const bannedCardsResponse = await fetch(
		"http://localhost:3000/banlist/banned"
	);
	if (!bannedCardsResponse.ok)
		throw new Error(bannedCardsResponse.statusText);

	const bannedCards: (
		| MonsterCardInterface
		| SpellCardInterface
		| TrapCardInterface
	)[] = await bannedCardsResponse.json();

	const limitedCardsResponse = await fetch(
		"http://localhost:3000/banlist/limited"
	);
	if (!limitedCardsResponse.ok)
		throw new Error(limitedCardsResponse.statusText);

	const limitedCards: (
		| MonsterCardInterface
		| SpellCardInterface
		| TrapCardInterface
	)[] = await limitedCardsResponse.json();

	const semiLimitedCardsResponse = await fetch(
		"http://localhost:3000/banlist/semi-limited"
	);
	if (!semiLimitedCardsResponse.ok)
		throw new Error(semiLimitedCardsResponse.statusText);

	const semiLimitedCards: (
		| MonsterCardInterface
		| SpellCardInterface
		| TrapCardInterface
	)[] = await semiLimitedCardsResponse.json();

	return {
		banned: bannedCards,
		limited: limitedCards,
		semiLimited: semiLimitedCards,
	};
}

/**
 * Renders the Banlist page displaying a list of banned, limited, or semi-limited cards in the YuGiOh TCG.
 *
 * @return The rendered Banlist page component.
 */
export default async function Banlist() {
	const cards = await getBanlistCards();

	return (
		<main className="flex grow flex-col gap-4 p-2">
			<section className="flex flex-col gap-2 rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
				<h1 className="text-2xl font-bold">Banlist</h1>
				<p>
					A list of all the banned, limited or semi-limited cards in
					the YuGiOh TCG.
				</p>
			</section>
			<BanlistTabs cards={cards} />
		</main>
	);
}
