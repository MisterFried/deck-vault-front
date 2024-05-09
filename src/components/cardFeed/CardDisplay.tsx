"use client";
// ** Import core packages
import { useEffect, useState } from "react";

// ** Import third party

// ** Import pages

// ** Import sub pages / sections

// ** Import components
import CardFilter from "@/components/cardFeed/CardFilter";
import PageController from "./PageController";
import CardFeed from "@/components/cardFeed/CardFeed";

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

export default function CardDisplay({ cards }: { cards: CardInterface[] }) {
	const [allCards, setAllCards] = useState(cards);
	const [filteredCards, setFilteredCards] = useState(cards);

	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(20);
	const [totalPages, setTotalPages] = useState(
		Math.ceil(filteredCards.length / perPage)
	);

	const [paginatedCards, setPaginatedCards] = useState(
		filteredCards.slice(0, perPage)
	);

	const [filter, setFilter] = useState("");

	// Update allCards when the cards props changes
	useEffect(() => {
		setAllCards(cards);
	}, [cards]);

	// Update filteredCards when the filter changes
	useEffect(() => {
		const filteredCards = allCards.filter(card =>
			card.name.toLowerCase().includes(filter.toLowerCase())
		);
		setFilteredCards(filteredCards);
	}, [filter, allCards]);

	// Update pagination each time the cards list changes or the perPage / currentPage changes
	useEffect(() => {
		const paginatedCards = filteredCards.slice(
			(currentPage - 1) * perPage,
			currentPage * perPage
		);
		setPaginatedCards(paginatedCards);
		setTotalPages(Math.ceil(filteredCards.length / perPage));

		if (currentPage > totalPages) setCurrentPage(totalPages);
	}, [filteredCards, currentPage, perPage, totalPages]);

	return (
		<section className="flex flex-col gap-2">
			<CardFilter setFilter={setFilter} />
			<PageController
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalPages={totalPages}
			/>
			<CardFeed cards={paginatedCards} />
			<PageController
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalPages={totalPages}
			/>
		</section>
	);
}
