// ** Import core packages

// ** Import third party

// ** Import pages

// ** Import sub pages / sections

// ** Import components
import MonsterCardDetails from "./MonsterCardDetails";
import SpellTrapCardDetails from "./SpellTrapCardDetails";
import PrintDetails from "./PrintDetails";

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
	MonsterCardWithPrintsInterface,
	SpellCardWithPrintsInterface,
	TrapCardWithPrintsInterface,
} from "@/types/cards.interface";

/**
 * Retrieves the card details for a given card name from the server.
 *
 * @param name - The name of the card.
 * @return The card details with prints sorted by date.
 */
async function getCardInfo(name: string) {
	// Get card details
	const response = await fetch(`http://localhost:3000/cards/search/${name}`);
	if (!response.ok) throw new Error(response.statusText);

	const cardDetails:
		| MonsterCardWithPrintsInterface
		| SpellCardWithPrintsInterface
		| TrapCardWithPrintsInterface = await response.json();

	// Convert prints date from string to Date object
	cardDetails.prints.forEach(print => {
		print.date = new Date(print.date);
	});

	// Sort prints by date
	cardDetails.prints.sort((a, b) => b.date.getTime() - a.date.getTime());

	return cardDetails;
}

/**
 * Renders the card details page based on the provided name from the URL.
 *
 * @param params.name - The name of the card.
 * @return The rendered card details page.
 */
export default async function Card({ params }: { params: { name: string } }) {
	const cardDetails = await getCardInfo(params.name);

	return (
		<main className="flex grow flex-col gap-4 p-2">
			{cardDetails.attribute ? (
				<MonsterCardDetails cardDetails={cardDetails} />
			) : (
				<SpellTrapCardDetails cardDetails={cardDetails} />
			)}
			<PrintDetails name={cardDetails.name} prints={cardDetails.prints} />
		</main>
	);
}
