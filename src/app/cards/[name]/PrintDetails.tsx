// ** Import core packages
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

// ** Import icons

// ** Import config

// ** Import styles

// ** Import Types
import { CardPrintInterface } from "@/types/cards.interface";

/**
 * Renders a section displaying the prints of a card.
 *
 * @param name - The name of the card.
 * @param prints - An array of card prints.
 * @return A section element displaying the card prints.
 */
export default function PrintDetails({
	name,
	prints,
}: {
	name: string;
	prints: CardPrintInterface[];
}) {
	return (
		<section className="rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
			<h2 className="text-xl font-semibold">Prints</h2>
			<p className="mb-6">
				<b className="font-semibold">{name}</b> has been print in{" "}
				{prints.length} sets. More details below
			</p>
			<div className="flex flex-col gap-2">
				{prints.map(print => (
					<article
						key={print.id}
						className="grid grid-cols-[1fr_auto] gap-x-2 rounded-sm border border-gray-300 bg-gray-50 p-2 shadow-sm"
					>
						<Link href={`/sets/${print.set_code}`}>
							{print.set_name}
						</Link>
						<span className="justify-self-end">{print.rarity}</span>
						<span className="text-sm font-light">{print.code}</span>
						<span className="justify-self-end text-sm font-light">{`${print.set_date.getUTCDate()}/${print.set_date.getUTCMonth() + 1}/${print.set_date.getUTCFullYear()}`}</span>
					</article>
				))}
			</div>
		</section>
	);
}
