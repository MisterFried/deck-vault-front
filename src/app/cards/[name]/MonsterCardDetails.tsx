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
import checkImageAvailability from "@/lib/checkImageAvailability";

// ** Import assets
import DARK from "/public/images/attributes/DARK.svg";
import DIVINE from "/public/images/attributes/DIVINE.svg";
import EARTH from "/public/images/attributes/EARTH.svg";
import FIRE from "/public/images/attributes/FIRE.svg";
import LIGHT from "/public/images/attributes/LIGHT.svg";
import WATER from "/public/images/attributes/WATER.svg";
import WIND from "/public/images/attributes/WIND.svg";
import Aqua from "/public/images/types/Aqua.webp";
import BeastWarrior from "/public/images/types/Beast-Warrior.webp";
import Beast from "/public/images/types/Beast.webp";
import Creator_God from "/public/images/types/Creator_God.webp";
import Cyberse from "/public/images/types/Cyberse.webp";
import Dinosaur from "/public/images/types/Dinosaur.webp";
import DivineBeast from "/public/images/types/Divine-Beast.webp";
import Dragon from "/public/images/types/Dragon.webp";
import Fairy from "/public/images/types/Fairy.webp";
import Fiend from "/public/images/types/Fiend.webp";
import Fish from "/public/images/types/Fish.webp";
import Insect from "/public/images/types/Insect.webp";
import Machine from "/public/images/types/Machine.webp";
import Plant from "/public/images/types/Plant.webp";
import Psychic from "/public/images/types/Psychic.webp";
import Pyro from "/public/images/types/Pyro.webp";
import Reptile from "/public/images/types/Reptile.webp";
import Rock from "/public/images/types/Rock.webp";
import Sea_Serpent from "/public/images/types/Sea_Serpent.webp";
import Spellcaster from "/public/images/types/Spellcaster.webp";
import Thunder from "/public/images/types/Thunder.webp";
import Warrior from "/public/images/types/Warrior.webp";
import Winged_Beast from "/public/images/types/Winged_Beast.webp";
import Wyrm from "/public/images/types/Wyrm.webp";
import Zombie from "/public/images/types/Winged_Beast.webp";
import Level from "/public/images/misc/Level.webp";
import Rank from "/public/images/misc/Rank.webp";
import banned from "/public/images/banlist/banned.svg";
import limited from "/public/images/banlist/limited.svg";
import semiLimited from "/public/images/banlist/semi-limited.svg";
import PendulumScale from "/public/images/misc/PendulumScale.webp";
import CardBack from "/public/images/misc/card-back.png";

// ** Import icons

// ** Import config

// ** Import styles

// ** Import Types
import { MonsterCardWithPrintsInterface } from "@/types/cards.interface";

export default async function MonsterCardDetails({
	cardDetails,
}: {
	cardDetails: MonsterCardWithPrintsInterface;
}) {
	function attributeIcon(attribute: string): StaticImageData {
		switch (attribute) {
			case "DARK":
				return DARK;
			case "DIVINE":
				return DIVINE;
			case "EARTH":
				return EARTH;
			case "FIRE":
				return FIRE;
			case "LIGHT":
				return LIGHT;
			case "WATER":
				return WATER;
			case "WIND":
				return WIND;
			default:
				return DIVINE;
		}
	}

	function typeIcon(type: string): StaticImageData {
		switch (type) {
			case "Aqua":
				return Aqua;
			case "Beast-Warrior":
				return BeastWarrior;
			case "Beast":
				return Beast;
			case "Creator God":
				return Creator_God;
			case "Cyberse":
				return Cyberse;
			case "Dinosaur":
				return Dinosaur;
			case "Divine-Beast":
				return DivineBeast;
			case "Dragon":
				return Dragon;
			case "Fairy":
				return Fairy;
			case "Fiend":
				return Fiend;
			case "Fish":
				return Fish;
			case "Insect":
				return Insect;
			case "Machine":
				return Machine;
			case "Plant":
				return Plant;
			case "Psychic":
				return Psychic;
			case "Pyro":
				return Pyro;
			case "Reptile":
				return Reptile;
			case "Rock":
				return Rock;
			case "Sea Serpent":
				return Sea_Serpent;
			case "Spellcaster":
				return Spellcaster;
			case "Thunder":
				return Thunder;
			case "Warrior":
				return Warrior;
			case "Winged Beast":
				return Winged_Beast;
			case "Wyrm":
				return Wyrm;
			case "Zombie":
				return Zombie;
			default:
				return Creator_God;
		}
	}

	function banlistIcon(status: string) {
		switch (status) {
			case "Banned":
				return banned;
			case "Limited":
				return limited;
			case "Semi-Limited":
				return semiLimited;
			default:
				return banned;
		}
	}

	const isImageAvailable = await checkImageAvailability(
		String(cardDetails.image_ids[0]),
		"full"
	);

	return (
		<section className="flex flex-col gap-4 rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
			<h1 className="text-2xl font-bold">{cardDetails.name}</h1>
			<div className="grid gap-2 sm:grid-cols-[1fr_2fr]">
				<Image
					src={
						isImageAvailable
							? `https://deckvault.b-cdn.net/card_images/full/${cardDetails.image_ids[0]}.webp`
							: CardBack
					}
					alt={cardDetails.name}
					className="mx-auto rounded-sm"
					width={813}
					height={1185}
				/>
				<div className="grid grid-cols-2 content-start gap-2 text-sm">
					<div className="flex h-8 items-center border border-gray-200 shadow-sm">
						<Image
							src={attributeIcon(cardDetails.attribute)}
							alt={cardDetails.attribute}
							className="mx-1 h-6 w-6"
						/>
						<span className="border-l border-gray-200 px-2">
							{cardDetails.attribute}
						</span>
					</div>
					<div className="flex h-8 items-center border border-gray-200 shadow-sm">
						<Image
							src={typeIcon(cardDetails.type)}
							alt={cardDetails.type}
							className="mx-1 h-6 w-6"
						/>
						<span className="border-l border-gray-200 px-2">
							{cardDetails.type}
						</span>
					</div>
					<span className="col-span-2 border border-gray-200 p-1 shadow-sm">
						{cardDetails.category}
					</span>
					{!cardDetails.category.includes("Link") && (
						<div className="col-span-2 flex h-8 items-center border border-gray-200 shadow-sm">
							{cardDetails.category.includes("XYZ") ? (
								<>
									<Image
										src={Rank}
										alt="Rank"
										className="mx-1 h-6 w-6"
									/>
									<span className="border-l border-gray-200 px-2">
										Rank {cardDetails.level}
									</span>
								</>
							) : (
								<>
									<Image
										src={Level}
										alt="Level"
										className="mx-1 h-6 w-6"
									/>
									<span className="border-l border-gray-200 px-2">
										Level {cardDetails.level}
									</span>
								</>
							)}
						</div>
					)}
					<span className="border border-gray-200 p-1 shadow-sm">
						ATK : {cardDetails.atk === null ? "?" : cardDetails.atk}
					</span>
					<span className="border border-gray-200 p-1 shadow-sm">
						{cardDetails.category.includes("Link")
							? `Link-${cardDetails.link}`
							: `DEF : ${cardDetails.def === null ? "?" : cardDetails.def}`}
					</span>
					{cardDetails.scale && (
						<div className="col-span-2 flex h-8 items-center border border-gray-200 shadow-sm">
							<Image
								src={PendulumScale}
								alt="Pendulum scale"
								className="mx-1 h-6 w-6"
							/>
							<span className="border-l border-gray-200 px-2">
								Scale {cardDetails.scale}
							</span>
						</div>
					)}
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
