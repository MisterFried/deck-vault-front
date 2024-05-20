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
import { SetInterface } from "@/types/sets.interface";

/**
 * Renders a link to a set with its name, code, date, and number of cards.
 *
 * @param set - The set object containing name, code, date, and cards_amount.
 * @return The rendered set link component.
 */
export default function SetLink({ set }: { set: SetInterface }) {
	return (
		<article className="grid grid-cols-[1fr_auto] rounded-sm border border-gray-300 bg-gray-50 p-1 shadow-sm">
			<Link
				href={`/sets/${set.code}`}
				className="justify-self-start text-lg font-medium"
			>
				{set.name}
			</Link>
			<span className="justify-self-end text-sm font-light">
				{set.code}
			</span>
			<span className="justify-self-start text-sm font-light">{`${set.date.getUTCDate()}/${set.date.getUTCMonth() + 1}/${set.date.getUTCFullYear()}`}</span>
			<span className="justify-self-end text-sm font-semibold">
				{set.cards_amount} cards
			</span>
		</article>
	);
}
