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
			<Image
				src={`https://deckvault.b-cdn.net/card_images/small/${card.image_ids[0]}.webp`}
				alt={card.name}
				width={268}
				height={391}
			/>
			<span className="text-xs font-light">{card.name}</span>
		</Link>
	);
}
