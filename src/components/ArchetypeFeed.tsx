"use client";

// ** Import core packages
import Link from "next/link";
import { useState } from "react";

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

/**
 * Renders a feed of archetypes with the ability to filter them by name.
 *
 * @param archetypes - The array of archetype names to display.
 * @return The rendered ArchetypeFeed component.
 */

export default function ArchetypeFeed({
	archetypes,
}: {
	archetypes: string[];
}) {
	const [filteredArchetypes, setFilteredArchetypes] = useState(archetypes);

	function handleFilter(filter: string) {
		setFilteredArchetypes(
			archetypes.filter(archetype =>
				archetype.toLowerCase().includes(filter.toLowerCase())
			)
		);
	}

	return (
		<section className="flex flex-col gap-2 rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
			<input
				type="text"
				className="w-full border border-gray-300 px-2 py-1"
				placeholder="Search an archetype"
				onChange={e => handleFilter(e.target.value)}
			/>
			<div className="grid grid-cols-1 border-t border-gray-300">
				{filteredArchetypes.map(archetype => (
					<Link
						href={`/archetypes/${encodeURIComponent(archetype.toLowerCase().replaceAll(" ", "_"))}`}
						key={archetype}
						className="border-b border-l border-r border-gray-300 bg-white p-2 focus:z-10"
					>
						{archetype}
					</Link>
				))}
			</div>
		</section>
	);
}
