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

/**
 * Renders a loading component with a pulse animation.
 *
 * @return The loading component.
 */
export default function loading() {
	return (
		<main className="flex w-full grow animate-pulse flex-col gap-4 p-2">
			<section className="flex animate-pulse flex-col gap-2 rounded-sm border border-gray-200 bg-white p-2 shadow-sm backdrop-blur-sm">
				<div className="h-6 w-1/4 rounded bg-gray-200"></div>
				<div className="h-4 w-full rounded bg-gray-200"></div>
				<div className="h-4 w-full rounded bg-gray-200"></div>
				<div className="h-4 w-full rounded bg-gray-200"></div>
			</section>
			<section className="grid grid-cols-1 rounded-sm border-t border-gray-200 bg-white shadow-sm backdrop-blur-sm">
				<details className="h-10 animate-pulse border-b border-l border-r border-gray-200 p-2 shadow-sm">
					<summary className="cursor-pointer bg-gray-200"></summary>
				</details>
				<details className="h-10 animate-pulse border-b border-l border-r border-gray-200 p-2 shadow-sm">
					<summary className="cursor-pointer bg-gray-200"></summary>
				</details>
				<details className="h-10 animate-pulse border-b border-l border-r border-gray-200 p-2 shadow-sm">
					<summary className="cursor-pointer bg-gray-200"></summary>
				</details>
				<details className="h-10 animate-pulse border-b border-l border-r border-gray-200 p-2 shadow-sm">
					<summary className="cursor-pointer bg-gray-200"></summary>
				</details>
				<details className="h-10 animate-pulse border-b border-l border-r border-gray-200 p-2 shadow-sm">
					<summary className="cursor-pointer bg-gray-200"></summary>
				</details>
				<details className="h-10 animate-pulse border-b border-l border-r border-gray-200 bg-white p-2 shadow-sm">
					<summary className="cursor-pointer bg-gray-200"></summary>
				</details>
				<details className="h-10 animate-pulse border-b border-l border-r border-gray-200 bg-white p-2 shadow-sm">
					<summary className="cursor-pointer bg-gray-200"></summary>
				</details>
				<details className="h-10 animate-pulse border-b border-l border-r border-gray-200 bg-white p-2 shadow-sm">
					<summary className="cursor-pointer bg-gray-200"></summary>
				</details>
				<details className="h-10 animate-pulse border-b border-l border-r border-gray-200 bg-white p-2 shadow-sm">
					<summary className="cursor-pointer bg-gray-200"></summary>
				</details>
			</section>
		</main>
	);
}
