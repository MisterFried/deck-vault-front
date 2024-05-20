// ** Import core packages

// ** Import third party

// ** Import pages

// ** Import sub pages / sections

// ** Import components
import SetYearGroup from "./SetYearGroup";

// ** Import state manager

// ** Import hooks

// ** Import APIs

// ** Import utils / lib

// ** Import assets

// ** Import icons

// ** Import config

// ** Import styles

// ** Import Types
import { SetInterface, SetsByYearInterface } from "../../types/sets.interface";

/**
 * Retrieves a list of sets from the server and organizes them by year group.
 *
 * @return A promise that resolves to an object containing sets organized by year group.
 */
async function getSets() {
	const response = await fetch("http://localhost:3000/sets");
	if (!response.ok) throw new Error(response.statusText);

	const sets: SetInterface[] = await response.json();

	// Convert date string to Date object
	sets.forEach(set => {
		set.date = new Date(set.date);
	});

	// Sort sets by date
	sets.sort((a, b) => b.date.getTime() - a.date.getTime());

	// Organize sets by year group
	const setsByYear: SetsByYearInterface[] = [];
	sets.forEach(set => {
		const year = set.date.getUTCFullYear();
		const yearGroup = setsByYear.find(group => group.year === year);
		if (yearGroup) yearGroup.sets.push(set);
		else setsByYear.push({ year, sets: [set] });
	});

	return setsByYear;
}

/**
 * Renders a page listing all the YuGiOh TCG sets organized by year group from most recent to oldest.
 *
 * @returns The sets page component.
 */
export default async function Sets() {
	const sets = await getSets();

	return (
		<main className="flex grow flex-col gap-4 p-2">
			<section className="flex flex-col gap-2 rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
				<h1 className="text-2xl font-bold">Sets</h1>
				<p className="">
					A detailed list of all the existing sets in the YuGiOh TCG.
					Click on a year to see the sets in that year.
				</p>
			</section>

			<section className="grid grid-cols-1 overflow-hidden rounded-sm border-t border-gray-300 bg-white shadow-sm">
				{sets.map(({ year, sets }) => (
					<SetYearGroup key={year} year={year} sets={sets} />
				))}
			</section>
		</main>
	);
}
