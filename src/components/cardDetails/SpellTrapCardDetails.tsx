// ** Import core packages
import Image, { StaticImageData } from "next/image";
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
import Spell from "/public/images/SPELL.svg";
import Trap from "/public/images/TRAP.svg";
import Continuous from "/public/images/Continuous.webp";
import Counter from "/public/images/Counter.webp";
import Equip from "/public/images/Equip.webp";
import Field from "/public/images/Field.webp";
import Normal from "/public/images/Normal.png";
import QuickPlay from "/public/images/Quick-Play.webp";
import Ritual from "/public/images/Ritual.webp";
import banned from "/public/images/banned.svg";
import limited from "/public/images/limited.svg";
import semiLimited from "/public/images/semi-limited.svg";

// ** Import icons

// ** Import config

// ** Import styles

// ** Import Types
import {
	SpellCardWithPrintsInterface,
	TrapCardWithPrintsInterface,
} from "@/types/cards.interface";

export default function MonsterCardDetails({
	cardDetails,
}: {
	cardDetails: SpellCardWithPrintsInterface | TrapCardWithPrintsInterface;
}) {
	function SpellTrapIcon(spellTrap: string) {
		switch (spellTrap) {
			case "Continuous":
				return Continuous;
			case "Counter":
				return Counter;
			case "Equip":
				return Equip;
			case "Field":
				return Field;
			case "Normal":
				return Normal;
			case "Quick-Play":
				return QuickPlay;
			case "Ritual":
				return Ritual;
			default:
				return Normal;
		}
	}

	function banlistIcon(status: string) {
		switch (status) {
			case "Banned":
				return banned;
			case "Limited":
				return limited;
			case "Semi-limited":
				return semiLimited;
			default:
				return banned;
		}
	}

	return (
		<section className="flex flex-col gap-4 rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
			<h1 className="text-2xl font-bold">{cardDetails.name}</h1>
			<div className="grid gap-2 sm:grid-cols-[1fr_2fr]">
				<Image
					src={cardPlaceholder}
					alt={cardDetails.name}
					className="mx-auto rounded-sm"
				/>
				<div className="grid grid-cols-2 content-start gap-2 text-sm">
					<div className="flex h-8 items-center border border-gray-200 shadow-sm">
						<Image
							src={SpellTrapIcon(cardDetails.type)}
							alt={cardDetails.type}
							className="mx-1 h-6 w-6"
						/>
						<span className="border-l border-gray-200 px-2">
							{cardDetails.type}
						</span>
					</div>
					<div className="flex h-8 items-center border border-gray-200 shadow-sm">
						<Image
							src={
								cardDetails.category.includes("Spell")
									? Spell
									: Trap
							}
							alt={cardDetails.category}
							className="mx-1 h-6 w-6"
						/>
						<span className="border-l border-gray-200 px-2">
							{cardDetails.category}
						</span>
					</div>
					{cardDetails.archetype && (
						<span className="col-span-2 border border-gray-200 p-1 shadow-sm">
							Archetype :{" "}
							<Link
								className="underline"
								href={`/archetypes/${encodeURIComponent(cardDetails.archetype.toLowerCase().replaceAll(" ", "_"))}`}
							>
								{cardDetails.archetype}
							</Link>
						</span>
					)}

					<div className="col-span-2 flex grow items-end justify-end gap-2 text-sm font-light">
						<span>Status : </span>
						<div className="flex items-center gap-1">
							{cardDetails.banlist !== "Unlimited" && (
								<>
									<Image
										src={banlistIcon(cardDetails.banlist)}
										alt={cardDetails.banlist}
										width={20}
										height={20}
									/>
								</>
							)}
							<span>{cardDetails.banlist}</span>
						</div>
					</div>
				</div>
			</div>
			<p className="col-span-2">{cardDetails.description}</p>
		</section>
	);
}
