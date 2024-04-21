// ** Import core packages

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
import { SetInterface, SetsByDateInterface } from "../types/sets.interface";

/**
 * Retrieves a list of sets from the server and organizes them by year group.
 *
 * @return A promise that resolves to an object containing sets organized by year group.
 */
async function getSets() {
	const response = await fetch("http://localhost:3000/sets");
	if (!response.ok) throw new Error(response.statusText);

	const sets: SetInterface[] = await response.json();

	// Organize sets by year group
	const setsByDate: SetsByDateInterface = {};
	sets.forEach(set => {
		const year = new Date(set.date).getFullYear();

		if (!setsByDate[year]) setsByDate[year] = [];
		setsByDate[year].push(set);
	});

	return setsByDate;
}

// TODO : Order sets by date in year group
/**
 * Renders a page listing all the YuGiOh TCG sets organized by year group.
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

			<section className="flex flex-col gap-4">
				{Object.entries(sets).map(([year, sets]) => (
					<details
						key={year}
						className="rounded-sm border border-main-500 p-2"
					>
						<summary className="font-medium">{year}</summary>
						<div className="flex flex-col gap-2">
							{sets.map((set, index) => (
								<article
									className="grid grid-cols-[1fr_auto] rounded-sm border border-main-300 p-1"
									key={`${set.code}-${index}`}
								>
									<span className="justify-self-start text-lg font-medium">
										{set.name}
									</span>
									<span className="justify-self-end text-sm font-light">
										{set.code}
									</span>
									<span className="justify-self-start text-sm font-light">{`${new Date(set.date).getDay()}/${new Date(set.date).getMonth()}/${new Date(set.date).getFullYear()}`}</span>
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
