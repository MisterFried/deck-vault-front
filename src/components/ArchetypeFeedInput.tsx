"use client";

// ** Import core packages
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
 * Render a search input for the ArchetypeFeed component.
 * This input updates the search parameter in the URL to display matching archetypes.
 *
 * @return The rendered ArchetypeFeedInput component.
 */
export default function ArchetypeFeedInput() {
	const currentSearchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	function handleSearch(term: string) {
		const newSearchParams = new URLSearchParams(currentSearchParams);
		newSearchParams.set("search", term);
		replace(`${pathname}?${newSearchParams.toString()}`);
	}

	return (
		<input
			type="text"
			className="w-full border border-gray-300 px-2 py-1"
			placeholder="Search an archetype"
			onChange={e => handleSearch(e.target.value)}
			defaultValue={currentSearchParams.get("search")?.toString()}
		/>
	);
}
