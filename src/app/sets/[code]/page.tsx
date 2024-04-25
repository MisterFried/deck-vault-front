// ** Import core packages
import Image from "next/image";

// ** Import third party

// ** Import pages

// ** Import sub pages / sections

// ** Import components

// ** Import state manager

// ** Import hooks

// ** Import APIs

// ** Import utils / lib

// ** Import assets
import cardPlaceholder from "/public/placeholders/cardPlaceholder.jpg";

// ** Import icons

// ** Import config

// ** Import styles

// ** Import Types
import { CardInterface } from "@/types/cards.interface";
import {
	FullSetBreakdownInterface,
	SetDetailsInterface,
} from "@/types/sets.interface";

/**
 * Retrieves set details from the server based on the provided code.
 *
 * @param code - The code of the set to retrieve details for.
 * @return A promise that resolves to the full set breakdown object.
 */
async function getSetInfo(code: string) {
	const response = await fetch(`http://localhost:3000/sets/${code}`);
	if (!response.ok) throw new Error(response.statusText);

	const setDetails: SetDetailsInterface[] = await response.json();

	setDetails.forEach(set => {
		// Convert date string to Date object
		set.set_date = new Date(set.set_date);

		// Regroup cards with multiple prints due to rarity
		const cardsList: CardInterface[] = [];
		set.cards.forEach(card => {
			const index = cardsList.findIndex(c => c.name === card.name);
			if (index === -1) cardsList.push(card);
		});
		set.cards = cardsList;
	});

	let mainVariant = 0;
	// If the set has multiple variants, set the main one to the one with the shortest name
	// Most of the time it will be the correct one (e.g. with "Alternate Art", "Tourment Prizes", etc.)
	// (used to define the name and date of the set in the full breakdown)
	if (setDetails.length > 1) {
		setDetails.forEach((set, index) => {
			if (set.set_name.length < setDetails[mainVariant].set_name.length)
				mainVariant = index;
		});
	}

	// Sort cards by their code
	setDetails.forEach(set => {
		set.cards.sort((a, b) => {
			const AIndex = Number(a.code.slice(-3));
			const BIndex = Number(b.code.slice(-3));
			if (AIndex < BIndex) return -1;
			if (AIndex > BIndex) return 1;
			return 0;
		});
	});

	// Order the variants by name length
	const variants: SetDetailsInterface[] = [];
	setDetails.forEach(set => variants.push(set));
	variants.sort((a, b) => a.set_name.length - b.set_name.length);

	const fullSetBreakdown: FullSetBreakdownInterface = {
		name: setDetails[mainVariant].set_name,
		date: setDetails[mainVariant].set_date,
		code: setDetails[mainVariant].set_code,
		variants: variants,
	};

	return fullSetBreakdown;
}

/**
 * Renders a detailed view of a specific set including its name, date, code, variants, and associated cards.
 *
 * @param params - The URL parameters for the set (e.g. code).
 * @return The JSX element representing the detailed view of the set.
 */
export default async function Set({ params }: { params: { code: string } }) {
	const fullSetBreakdown = await getSetInfo(params.code);

	return (
		<main className="flex grow flex-col gap-8 p-2">
			<section className="flex flex-col">
				<h1 className="text-2xl font-bold">{fullSetBreakdown.name}</h1>
				<div className="flex justify-between gap-2">
					<span className="text-sm font-light">{`${fullSetBreakdown.date.getUTCDate()}/${fullSetBreakdown.date.getUTCMonth() + 1}/${fullSetBreakdown.date.getUTCFullYear()}`}</span>
					<span className="text-sm font-light">
						{fullSetBreakdown.code}
					</span>
				</div>
				<p className="mt-4 text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Recusandae voluptates sint repellat illum. Molestias
					voluptatum hic inventore mollitia sint deserunt,
					consequuntur aspernatur recusandae necessitatibus aut
					voluptatem numquam perferendis dolorem voluptatibus. Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Earum
					porro consectetur aliquam ducimus repellendus qui,
					temporibus aut, unde aspernatur in id. Repudiandae quia
					laudantium consequatur fugit aliquam fugiat nulla!
					Perferendis.
				</p>
			</section>
			{fullSetBreakdown.variants.length > 1 && (
				<section className="flex flex-col">
					<h2 className="text-xl font-semibold">Variants</h2>
					<p className="mb-2 text-sm font-light">
						Multiple variants of this sets exists. See the list
						below for details.
					</p>
					<div className="flex flex-col">
						{fullSetBreakdown.variants.map((set, index) => (
							<div
								key={`${set.set_code}-${index}`}
								className="grid grid-cols-[1fr_auto]"
							>
								<span className="font-medium">
									{set.set_name}
								</span>
								<span className="text-sm font-light">{`${set.set_date.getUTCDate()}/${set.set_date.getUTCMonth() + 1}/${set.set_date.getUTCFullYear()}`}</span>
							</div>
						))}
					</div>
				</section>
			)}
			<section className="flex flex-col gap-1">
				<div className="flex justify-between">
					<h2 className="text-xl font-semibold">Cards</h2>
					{fullSetBreakdown.variants.length === 1 && (
						<span className="text-sm font-light">
							Total : {fullSetBreakdown.variants[0].cards.length}
						</span>
					)}
				</div>
				{fullSetBreakdown.variants.map((variant, index) => (
					<article key={index} className="mb-16 last:mb-0">
						{fullSetBreakdown.variants.length > 1 && (
							<div className="flex justify-between">
								<h3>{variant.set_name}</h3>
								<span className="text-sm font-light">
									Total : {variant.cards.length}
								</span>
							</div>
						)}
						<div className="grid grid-cols-4 gap-x-2 gap-y-4">
							{variant.cards.map((card, index) => (
								<div key={index} className="flex flex-col">
									<Image
										src={cardPlaceholder}
										alt={card.name}
									/>
									<span className="text-xs font-light">
										{card.name}
									</span>
								</div>
							))}
						</div>
					</article>
				))}
			</section>
		</main>
	);
}
