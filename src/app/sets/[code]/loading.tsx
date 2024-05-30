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
			<section className="flex flex-col gap-2 rounded-sm border border-gray-200 bg-white p-2 shadow-sm">
				<div className="h-8 w-3/4 rounded-sm bg-gray-200"></div>
				<div className="flex h-4 justify-between gap-2">
					<div className="w-12 rounded-sm bg-gray-200"></div>
					<div className="w-8 rounded-sm bg-gray-200"></div>
				</div>
				<div className="mt-4 h-36 rounded-sm bg-gray-200"></div>
			</section>
			<section className="flex flex-col gap-2 rounded-sm border border-gray-200 bg-white p-2 shadow-sm">
				<div className="flex justify-between">
					<div className="h-6 w-1/5 rounded-sm bg-gray-200"></div>
					<div className="h-6 w-1/6 rounded-sm bg-gray-200"></div>
				</div>
				<div className="grid grid-cols-4 gap-x-2 gap-y-4">
					<div className="h-44 rounded-sm border bg-gray-200"></div>
					<div className="h-44 rounded-sm border bg-gray-200"></div>
					<div className="h-44 rounded-sm border bg-gray-200"></div>
					<div className="h-44 rounded-sm border bg-gray-200"></div>
					<div className="h-44 rounded-sm border bg-gray-200"></div>
					<div className="h-44 rounded-sm border bg-gray-200"></div>
					<div className="h-44 rounded-sm border bg-gray-200"></div>
					<div className="h-44 rounded-sm border bg-gray-200"></div>
					<div className="h-44 rounded-sm border bg-gray-200"></div>
					<div className="h-44 rounded-sm border bg-gray-200"></div>
				</div>
			</section>
		</main>
	);
}
