// ** Import core packages
import Image from "next/image";
import Link from "next/link";

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
import { CardInterfaceWithPrints } from "@/types/cards.interface";

// TODO : Separate card info and card print in different components
// ! Cards with 0 ATK or DEf are stored with null values in BD, need investigation
async function getCardInfo(name: string) {
	// Get card details
	const response = await fetch(`http://localhost:3000/cards/search/${name}`);
	if (!response.ok) throw new Error(response.statusText);

	const cardDetails: CardInterfaceWithPrints = await response.json();

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
		<main className="flex grow flex-col gap-8 p-2">
			<section className="flex flex-col gap-4">
				<h1 className="text-2xl font-bold">{cardDetails.name}</h1>
				<div className="grid grid-cols-2 gap-2">
					<Image
						src={cardPlaceholder}
						alt={cardDetails.name}
						className="rounded-sm"
					/>
					<div className="flex flex-col">
						{cardDetails.attribute && (
							<span>
								{cardDetails.attribute} / {cardDetails.type}
							</span>
						)}
						<span>{cardDetails.category}</span>
						{cardDetails.level && (
							<span>
								{cardDetails.category.includes("XYZ")
									? "Rank"
									: "Level"}{" "}
								: {cardDetails.level}
							</span>
						)}
						{cardDetails.category.includes("Monster") && (
							<span>
								ATK :{" "}
								{cardDetails.atk !== null
									? cardDetails.atk
									: "?"}{" "}
								/ DEF :{" "}
								{cardDetails.def !== null
									? cardDetails.def
									: cardDetails.category.includes("Link")
										? "-"
										: "?"}
							</span>
						)}
						{cardDetails.link && (
							<span>Link : {cardDetails.link}</span>
						)}
						{cardDetails.scale && (
							<span>Pendulum scale : {cardDetails.scale}</span>
						)}
						{cardDetails.archetype && (
							<span>Archetype : {cardDetails.archetype}</span>
						)}

						<span className="flex grow items-end justify-end text-sm font-light">
							Status : {cardDetails.banlist}
						</span>
					</div>
				</div>
				<p className="col-span-2">{cardDetails.description}</p>
			</section>
			<section>
				<h2 className="text-xl font-semibold">Prints</h2>
				<p className="mb-6">
					<b>{cardDetails.name}</b> has been print in{" "}
					{cardDetails.prints.length} sets. More details below
				</p>
				<div className="flex flex-col gap-2">
					{cardDetails.prints.map(print => (
						<article
							key={print.id}
							className="grid grid-cols-[1fr_auto] gap-x-2 rounded-sm border border-main-200 p-1 shadow-sm"
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
