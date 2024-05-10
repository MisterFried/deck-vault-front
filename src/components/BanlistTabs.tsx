"use client";

// ** Import core packages
import { useState } from "react";

// ** Import third party

// ** Import pages

// ** Import sub pages / sections

// ** Import components
import CardFeed from "./cardFeed/CardFeed";

// ** Import state manager

// ** Import hooks

// ** Import APIs

// ** Import utils / lib

// ** Import assets

// ** Import icons

// ** Import config

// ** Import styles

// ** Import Types
import { CardInterface } from "@/types/cards.interface";

// ** Types
interface BanlistTabsProps {
	cards: {
		banned: CardInterface[];
		limited: CardInterface[];
		semiLimited: CardInterface[];
	};
}

/**
 * Renders a tabbed component for displaying banlist cards.
 *
 * @param cards - The cards to be displayed in each tab.
 * @return The rendered tabbed component.
 */
export default function BanlistTabs({ cards }: BanlistTabsProps) {
	const [activeTab, setActiveTab] = useState(1);

	return (
		<section className="grid grid-cols-3">
			<button
				onClick={() => setActiveTab(1)}
				className={`banlistTab relative border border-r-0 border-gray-300 px-4 py-2 ${activeTab === 1 && "active"}`}
			>
				Banned
			</button>
			<button
				onClick={() => setActiveTab(2)}
				className={`banlistTab relative border border-gray-300 px-4 py-2 ${activeTab === 2 && "active"}`}
			>
				Limited
			</button>
			<button
				onClick={() => setActiveTab(3)}
				className={`banlistTab relative border border-l-0 border-gray-300 px-4 py-2 ${activeTab === 3 && "active"}`}
			>
				semi-limited
			</button>
			<div
				className={`col-span-3 border border-t-0 border-gray-300 bg-white p-2 ${activeTab !== 1 && "hidden"}`}
			>
				<CardFeed cards={cards.banned} />
			</div>
			<div
				className={`col-span-3 border border-t-0 border-gray-300 bg-white p-2 ${activeTab !== 2 && "hidden"}`}
			>
				<CardFeed cards={cards.limited} />
			</div>
			<div
				className={`col-span-3 border border-t-0 border-gray-400 bg-white p-2 ${activeTab !== 3 && "hidden"}`}
			>
				<CardFeed cards={cards.semiLimited} />
			</div>
		</section>
	);
}
