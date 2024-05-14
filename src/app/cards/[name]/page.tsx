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
import DARK from "/public/attributes/DARK.svg";
import DIVINE from "/public/attributes/DIVINE.svg";
import EARTH from "/public/attributes/EARTH.svg";
import FIRE from "/public/attributes/FIRE.svg";
import LIGHT from "/public/attributes/LIGHT.svg";
import WATER from "/public/attributes/WATER.svg";
import WIND from "/public/attributes/WIND.svg";
import Aqua from "/public/types/Aqua.webp";
import BeastWarrior from "/public/types/Beast-Warrior.webp";
import Beast from "/public/types/Beast.webp";
import Creator_God from "/public/types/Creator_God.webp";
import Cyberse from "/public/types/Cyberse.webp";
import Dinosaur from "/public/types/Dinosaur.webp";
import DivineBeast from "/public/types/Divine-Beast.webp";
import Dragon from "/public/types/Dragon.webp";
import Fairy from "/public/types/Fairy.webp";
import Fiend from "/public/types/Fiend.webp";
import Fish from "/public/types/Fish.webp";
import Insect from "/public/types/Insect.webp";
import Machine from "/public/types/Machine.webp";
import Plant from "/public/types/Plant.webp";
import Psychic from "/public/types/Psychic.webp";
import Pyro from "/public/types/Pyro.webp";
import Reptile from "/public/types/Reptile.webp";
import Rock from "/public/types/Rock.webp";
import Sea_Serpent from "/public/types/Sea_Serpent.webp";
import Spellcaster from "/public/types/Spellcaster.webp";
import Thunder from "/public/types/Thunder.webp";
import Warrior from "/public/types/Warrior.webp";
import Winged_Beast from "/public/types/Winged_Beast.webp";
import Wyrm from "/public/types/Wyrm.webp";
import Zombie from "/public/types/Winged_Beast.webp";
import Level from "/public/images/Level.webp";
import Rank from "/public/images/Rank.webp";
import banned from "/public/images/banned.svg";
import limited from "/public/images/limited.svg";
import semiLimited from "/public/images/semi-limited.svg";
import PendulumScale from "/public/images/PendulumScale.webp";
import Continuous from "/public/images/Continuous.webp";
import Counter from "/public/images/Counter.webp";
import Equip from "/public/images/Equip.webp";
import Field from "/public/images/Field.webp";
import Normal from "/public/images/Normal.png";
import QuickPlay from "/public/images/Quick-Play.webp";
import Ritual from "/public/images/Ritual.webp";

// ** Import icons

// ** Import config

// ** Import styles

// ** Import Types
import { CardWithPrintsInterface } from "@/types/cards.interface";

// TODO : Separate card info and card print in different components
async function getCardInfo(name: string) {
	// Get card details
	const response = await fetch(`http://localhost:3000/cards/search/${name}`);
	if (!response.ok) throw new Error(response.statusText);

	const cardDetails: CardWithPrintsInterface = await response.json();

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
			case "Semi-limited":
				return semiLimited;
			default:
				return banned;
		}
	}

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

	return (
		<main className="flex grow flex-col gap-4 p-2">
			<section className="flex flex-col gap-4 rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
				<h1 className="text-2xl font-bold">{cardDetails.name}</h1>
				<div className="grid grid-cols-2 gap-2">
					<Image
						src={cardPlaceholder}
						alt={cardDetails.name}
						className="rounded-sm"
					/>
					<div className="flex flex-col">
						{cardDetails.attribute && (
							<div className="flex items-center gap-2">
								<div className="flex items-center justify-center gap-2">
									<Image
										src={attributeIcon(
											cardDetails.attribute
										)}
										alt={cardDetails.attribute}
										width={20}
										height={20}
									/>
									{cardDetails.attribute}
								</div>
								<span>/</span>
								<div className="flex items-center justify-center gap-2">
									<Image
										src={typeIcon(cardDetails.type)}
										alt={cardDetails.type}
										width={20}
										height={20}
									/>
									{cardDetails.type}
								</div>
							</div>
						)}
						{cardDetails.category.includes("Spell") ||
						cardDetails.category.includes("Trap") ? (
							<div className="flex items-center gap-2">
								<Image
									src={SpellTrapIcon(cardDetails.type)}
									alt={cardDetails.category}
									width={20}
									height={20}
								/>
								<span>
									{cardDetails.type}{" "}
									{cardDetails.category.includes("Trap")
										? "trap"
										: "spell"}
								</span>
							</div>
						) : (
							<span>{cardDetails.category}</span>
						)}
						{cardDetails.level && (
							<div className="flex items-center gap-2">
								{cardDetails.category.includes("XYZ") ? (
									<>
										<Image
											src={Rank}
											alt="Rank"
											width={20}
											height={20}
										/>
										<span>Rank : </span>
									</>
								) : (
									<>
										<Image
											src={Level}
											alt="Level"
											width={20}
											height={20}
										/>
										<span>Level : </span>
									</>
								)}
								<span>{cardDetails.level}</span>
							</div>
						)}
						{cardDetails.category.includes("Monster") && (
							<span>
								ATK :{" "}
								{cardDetails.atk !== null
									? cardDetails.atk
									: "?"}{" "}
								{!cardDetails.category.includes("Link") &&
									` / DEF : ${cardDetails.def !== null ? cardDetails.def : "?"}`}
							</span>
						)}
						{cardDetails.link && (
							<span>Link-{cardDetails.link}</span>
						)}
						{cardDetails.scale && (
							<div className="flex items-center gap-2">
								<Image
									src={PendulumScale}
									alt="Pendulum scale"
									width={20}
									height={20}
								/>
								<span>Scale : {cardDetails.scale}</span>
							</div>
						)}
						{cardDetails.archetype && (
							<span>
								Archetype :{" "}
								<Link
									className="underline"
									href={`/archetypes/${encodeURIComponent(cardDetails.archetype.toLowerCase().replaceAll(" ", "_"))}`}
								>
									{cardDetails.archetype}
								</Link>
							</span>
						)}

						<div className="flex grow items-end justify-end gap-2 text-sm font-light">
							<span>Status : </span>
							<div className="flex items-center gap-1">
								{cardDetails.banlist !== "Unlimited" && (
									<>
										<Image
											src={banlistIcon(
												cardDetails.banlist
											)}
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
			<section className="rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
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
