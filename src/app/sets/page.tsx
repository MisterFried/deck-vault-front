// ** Import core packages
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

// ** Import icons

// ** Import config

// ** Import styles

// ** Import Types
import { SetInterface, SetsByYearInterface } from "../types/sets.interface";

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
			<h1 className="text-2xl font-bold">Sets</h1>
			<p className="">
				A detailed list of all the existing sets in the YuGiOh TCG.
				Click on a year to see the sets in that year.
			</p>

			<section className="grid grid-cols-1 border-t border-main-500">
				{sets.map(({ year, sets }) => (
					<details
						key={year}
						className="border-b border-l border-r border-main-600 p-2"
					>
						<summary className="cursor-pointer font-medium">
							{year}
						</summary>
						<div className="flex flex-col gap-2">
							{sets.map((set, index) => (
								<article
									className="grid grid-cols-[1fr_auto] rounded-sm border border-main-300 bg-main-50 p-1 shadow-md"
									key={`${set.code}-${index}`}
								>
									<Link
										href={`/sets/${set.code}`}
										className="justify-self-start text-lg font-medium"
									>
										{set.name}
									</Link>
									<span className="justify-self-end text-sm font-light">
										{set.code}
									</span>
									<span className="justify-self-start text-sm font-light">{`${set.date.getUTCDate()}/${set.date.getUTCMonth() + 1}/${set.date.getUTCFullYear()}`}</span>
									<span className="justify-self-end text-sm font-semibold">
										{set.cards_amount} cards
									</span>
								</article>
							))}
						</div>
					</details>
				))}
			</section>
		</main>
	);
}
