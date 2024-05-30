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
			<section className="grid grid-cols-2 gap-2">
				<div className="aspect-[8/5] rounded-sm border border-gray-200 bg-white shadow-sm backdrop-blur-sm"></div>
				<div className="aspect-[8/5] rounded-sm border border-gray-200 bg-white shadow-sm backdrop-blur-sm"></div>
				<div className="aspect-[8/5] rounded-sm border border-gray-200 bg-white shadow-sm backdrop-blur-sm"></div>
				<div className="aspect-[8/5] rounded-sm border border-gray-200 bg-white shadow-sm backdrop-blur-sm"></div>
			</section>
			<section className="flex flex-col gap-2 rounded-sm border border-gray-200 bg-white p-2 shadow-sm backdrop-blur-sm">
				<div className="mb-2 h-6 w-3/4 rounded bg-gray-200"></div>
				<div className="h-12 w-full rounded bg-gray-200"></div>
				<div className="h-12 w-full rounded bg-gray-200"></div>
			</section>
		</main>
	);
}
