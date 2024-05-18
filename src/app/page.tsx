// ** Import core packages

// ** Import third party

// ** Import pages

// ** Import sub pages / sections

// ** Import components
import NavigationCard from "@/components/NavigationCard";

// ** Import state manager

// ** Import hooks

// ** Import APIs

// ** Import utils / lib

// ** Import assets
import cardsImage from "/public/images/homepage/cards.jpg";
import setsImage from "/public/images/homepage/sets.jpg";
import archetypesImage from "/public/images/homepage/archetypes.jpg";
import banlistImage from "/public/images/homepage/banlist.jpg";

// ** Import icons

// ** Import config

// ** Import styles

// ** Import Types

/**
 * Renders the Home component, which displays a grid of navigation cards and a section with welcome text.
 *
 * @return The Home component.
 */
export default function Home() {
	return (
		<main className="flex grow flex-col gap-4 p-2">
			<section className="grid grid-cols-2 gap-2 ">
				<NavigationCard
					label="Cards"
					href="/cards"
					image={cardsImage}
				/>
				<NavigationCard label="Sets" href="/sets" image={setsImage} />
				<NavigationCard
					label="Banlist"
					href="/banlist"
					image={banlistImage}
				/>
				<NavigationCard
					label="Archetypes"
					href="/archetypes"
					image={archetypesImage}
				/>
			</section>
			<section className="flex flex-col gap-4 rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
				<h1 className="mb-2 text-2xl font-bold">Deck Vault</h1>
				<p className="text-sm leading-4">
					Welcome to DeckVault, your go-to YuGiOh card database!
				</p>
				<p className="text-sm leading-4">
					With DeckVault, you have access to comprehensive information
					about every YuGiOh card, set, archetype, and banlist.
					Whether you are a seasoned player or just starting out, our
					app provides you with the tools you need to enhance your
					YuGiOh experience.
				</p>
				<p className="text-sm leading-4">
					In the near future, we plan to introduce a decklist feature
					allowing you to create and share your own decklists with
					others, as well as articles, guide and more. Stay tuned for
					more updates and exciting features!
				</p>
			</section>
		</main>
	);
}
