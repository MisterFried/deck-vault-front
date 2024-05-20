// ** Import core packages

// ** Import third party

// ** Import pages

// ** Import sub pages / sections

// ** Import components
import SetLink from "./SetLink";

// ** Import state manager

// ** Import hooks

// ** Import APIs

// ** Import utils / lib

// ** Import assets

// ** Import icons

// ** Import config

// ** Import styles

// ** Import Types
import { SetInterface } from "@/types/sets.interface";

/**
 * Renders a year group component that displays a list of sets for a given year.
 *
 * @param year - The year for the year group.
 * @param sets - An array of sets for the year group.
 * @return The rendered year group component.
 */
export default function SetYearGroup({
	year,
	sets,
}: {
	year: number;
	sets: SetInterface[];
}) {
	return (
		<details className="border-b border-l border-r border-gray-300 bg-white p-2 shadow-sm">
			<summary className="cursor-pointer font-medium">{year}</summary>
			<div className="flex flex-col gap-2">
				{sets.map(set => (
					<SetLink key={set.name} set={set} />
				))}
			</div>
		</details>
	);
}
