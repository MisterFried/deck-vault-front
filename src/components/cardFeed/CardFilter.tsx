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

// ** Types
interface CardFilterProps {
	setFilter: (filter: string) => void;
}

export default function CardFilter({ setFilter }: CardFilterProps) {
	return (
		<div className="flex gap-1 rounded-sm border border-main-300 px-2 py-1">
			<input
				name="search"
				type="text"
				placeholder="Search"
				className="grow"
				onChange={e => setFilter(e.target.value)}
			/>
		</div>
	);
}
