// ** Import core packages
import Link from "next/link";
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
import {
	MonsterCardInterface,
	SpellCardInterface,
	TrapCardInterface,
} from "@/types/cards.interface";

export default function CardLink({
	card,
}: {
	card: MonsterCardInterface | SpellCardInterface | TrapCardInterface;
}) {
	return (
		<Link
			href={`/cards/${encodeURIComponent(card.name.toLowerCase().replaceAll(" ", "_"))}`}
			className="flex flex-col"
		>
			<Image src={cardPlaceholder} alt={card.name} />
			<span className="text-xs font-light">{card.name}</span>
		</Link>
	);
}
