// ** Import core packages

// ** Import third party

// ** Import pages

// ** Import sub pages / sections

// ** Import components
import BanlistTab from "./BanlistTab";

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
import BanlistContent from "./BanlistContent";

// ** Types
interface BanlistProps {
	activeStatus: string;
	cards: {
		banned: (
			| MonsterCardInterface
			| SpellCardInterface
			| TrapCardInterface
		)[];
		limited: (
			| MonsterCardInterface
			| SpellCardInterface
			| TrapCardInterface
		)[];
		semiLimited: (
			| MonsterCardInterface
			| SpellCardInterface
			| TrapCardInterface
		)[];
	};
}

/**
 * Render a tabbed component that displays the banned, limited, and semi-limited cards.
 *
 * @param cards - The cards to be displayed in each tab.
 * @return The rendered tabbed component.
 */
export default async function BanlistFeed({
	activeStatus,
	cards,
}: BanlistProps) {
	return (
		<section className="grid grid-cols-3">
			<BanlistTab status="banned" />
			<BanlistTab status="limited" />
			<BanlistTab status="semi-limited" />
			<BanlistContent
				status={"banned"}
				activeStatus={activeStatus}
				cards={cards.banned}
			/>
			<BanlistContent
				status={"limited"}
				activeStatus={activeStatus}
				cards={cards.limited}
			/>
			<BanlistContent
				status={"semi-limited"}
				activeStatus={activeStatus}
				cards={cards.semiLimited}
			/>
		</section>
	);
}
