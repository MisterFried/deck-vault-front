// ** Import core packages
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// ** Import third party

// ** Import pages

// ** Import sub pages / sections

// ** Import components
import MonsterCardDetails from "@/components/cardDetails/MonsterCardDetails";
import SpellTrapCardDetails from "@/components/cardDetails/SpellTrapCardDetails";

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

// TODO : Separate card info and card print in different components
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
		print.set_date = new Date(print.set_date);
	});

	// Sort prints by date
	cardDetails.prints.sort(
		(a, b) => b.set_date.getTime() - a.set_date.getTime()
	);

	return cardDetails;
}

export default async function Card({ params }: { params: { name: string } }) {
	const cardDetails = await getCardInfo(params.name);

	return (
		<main className="flex grow flex-col gap-4 p-2">
			{cardDetails.attribute ? (
				<MonsterCardDetails cardDetails={cardDetails} />
			) : (
				<SpellTrapCardDetails cardDetails={cardDetails} />
			)}
			<section className="rounded-sm border border-gray-300 p-2 shadow-sm bg-white">
				<h2 className="text-xl font-semibold">Prints</h2>
				<p className="mb-6">
					<b className="font-semibold">{cardDetails.name}</b> has been
					print in {cardDetails.prints.length} sets. More details
					below
				</p>
				<div className="flex flex-col gap-2">
					{cardDetails.prints.map(print => (
						<article
							key={print.id}
							className="grid grid-cols-[1fr_auto] gap-x-2 rounded-sm border border-gray-300 bg-gray-50 p-2 shadow-sm"
						>
							<Link href={`/sets/${print.set_code}`}>
								{print.set_name}
							</Link>
							<span className="justify-self-end">
								{print.rarity}
							</span>
							<span className="text-sm font-light">
								{print.code}
							</span>
							<span className="justify-self-end text-sm font-light">{`${print.set_date.getUTCDate()}/${print.set_date.getUTCMonth() + 1}/${print.set_date.getUTCFullYear()}`}</span>
						</article>
					))}
				</div>
			</section>
		</main>
	);
}
