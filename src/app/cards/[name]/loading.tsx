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
				<div className="h-8 w-1/2 rounded-sm bg-gray-200"></div>
				<div className="grid gap-2 sm:grid-cols-[1fr_2fr]">
					<div className="mx-auto aspect-[59/86] w-full rounded-sm bg-gray-200"></div>
					<div className="grid grid-cols-2 content-start gap-2">
						<div className="h-8 w-full rounded-sm bg-gray-200"></div>
						<div className="h-8 w-full rounded-sm bg-gray-200"></div>
						<div className="h-8 w-full rounded-sm bg-gray-200"></div>
						<div className="h-8 w-full rounded-sm bg-gray-200"></div>
						<div className="col-span-2 h-8 w-full rounded-sm bg-gray-200"></div>
					</div>
				</div>
				<div className="h-16 w-full rounded-sm bg-gray-200"></div>
			</section>
			<section className="flex flex-col gap-2 rounded-sm border border-gray-200 bg-white p-2 shadow-sm">
				<div className="h-8 w-1/4 rounded-sm bg-gray-200"></div>
				<div className="mb-6 h-6 w-full rounded-sm bg-gray-200"></div>
				<div className="h-12 w-full rounded-sm bg-gray-200"></div>
				<div className="h-12 w-full rounded-sm bg-gray-200"></div>
				<div className="h-12 w-full rounded-sm bg-gray-200"></div>
			</section>
		</main>
	);
}
