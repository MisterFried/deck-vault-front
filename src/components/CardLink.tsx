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
import checkImageAvailability from "@/lib/checkImageAvailability";

// ** Import assets
import CardBack from "/public/images/misc/card-back.png";

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
 * Renders a Link component to the specified card.
 *
 * @param card - The card object.
 * @return A link to the card with its image and name.
 */
export default async function CardLink({
	card,
}: {
	card: MonsterCardInterface | SpellCardInterface | TrapCardInterface;
}) {
	const isImageAvailable = await checkImageAvailability(
		String(card.image_ids[0]),
		"small"
	);

	return (
		<Link
			href={`/cards/${encodeURIComponent(card.name.toLowerCase().replaceAll(" ", "_"))}`}
			className="flex flex-col"
		>
			<Image
				src={
					isImageAvailable
						? `https://deckvault.b-cdn.net/card_images/small/${card.image_ids[0]}.webp`
						: CardBack
				}
				alt={card.name}
				width={268}
				height={391}
			/>
			<span className="text-xs font-light">{card.name}</span>
		</Link>
	);
}
