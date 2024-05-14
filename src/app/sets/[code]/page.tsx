// ** Import core packages

// ** Import third party

// ** Import pages

// ** Import sub pages / sections

// ** Import components
import SetCardFeed from "@/components/setCardFeed/SetCardFeed";

// ** Import state manager

// ** Import hooks

// ** Import APIs

// ** Import utils / lib

// ** Import assets

// ** Import icons

// ** Import config

// ** Import styles

// ** Import Types
import {
	SetBreakdownInterface,
	SetVariantInterface,
} from "@/types/sets.interface";

/**
 * Retrieves set details from the server based on the provided code.
 *
 * @param code - The code of the set to retrieve details for.
 * @return A promise that resolves to the full set breakdown object.
 */
async function getSetInfo(code: string) {
	const response = await fetch(`http://localhost:3000/sets/${code}`);
	if (!response.ok) throw new Error(response.statusText);

	// Array with details for each set's variants
	const setVariants: SetVariantInterface[] = await response.json();

	setVariants.forEach(variant => {
		// Convert date string to Date object
		variant.date = new Date(variant.date);
	});

	// Sort cards by their code
	setVariants.forEach(variant => {
		variant.cards.sort((a, b) => {
			const AIndex = Number(a.code.slice(-3));
			const BIndex = Number(b.code.slice(-3));
			if (AIndex < BIndex) return -1;
			if (AIndex > BIndex) return 1;
			return 0;
		});
	});

	// Order the variants by name length
	setVariants.sort((a, b) => a.name.length - b.name.length);

	// Create a full set breakdown object with the global set details and the sorted variants list
	const setBreakdown: SetBreakdownInterface = {
		name: setVariants[0].name,
		date: setVariants[0].date,
		code: setVariants[0].code,
		variants: setVariants,
	};

	return setBreakdown;
}

/**
 * Renders a detailed view of a specific set including its name, date, code, variants, and associated cards.
 *
 * @param params - The URL parameters for the set (e.g. code).
 * @return The JSX element representing the detailed view of the set.
 */
export default async function Set({ params }: { params: { code: string } }) {
	const setBreakdown = await getSetInfo(params.code);

	return (
		<main className="flex grow flex-col gap-4 p-2">
			<section className="flex flex-col rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
				<h1 className="text-2xl font-bold">{setBreakdown.name}</h1>
				<div className="flex justify-between gap-2">
					<span className="text-sm font-light">{`${setBreakdown.date.getUTCDate()}/${setBreakdown.date.getUTCMonth() + 1}/${setBreakdown.date.getUTCFullYear()}`}</span>
					<span className="text-sm font-light">
						{setBreakdown.code}
					</span>
				</div>
				<p className="mt-4 text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Recusandae voluptates sint repellat illum. Molestias
					voluptatum hic inventore mollitia sint deserunt,
					consequuntur aspernatur recusandae necessitatibus aut
					voluptatem numquam perferendis dolorem voluptatibus. Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Earum
					porro consectetur aliquam ducimus repellendus qui,
					temporibus aut, unde aspernatur in id. Repudiandae quia
					laudantium consequatur fugit aliquam fugiat nulla!
					Perferendis.
				</p>
			</section>
			{setBreakdown.variants.length > 1 && (
				<section className="flex flex-col rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
					<h2 className="text-xl font-semibold">Variants</h2>
					<p className="mb-2 text-sm font-light">
						Multiple variants of this sets exists. See the list
						below for details.
					</p>
					<div className="flex flex-col">
						{setBreakdown.variants.map((set, index) => (
							<div
								key={`${set.code}-${index}`}
								className="grid grid-cols-[1fr_auto]"
							>
								<span className="font-medium">{set.name}</span>
								<span className="text-sm font-light">{`${set.date.getUTCDate()}/${set.date.getUTCMonth() + 1}/${set.date.getUTCFullYear()}`}</span>
							</div>
						))}
					</div>
				</section>
			)}
			<section className="flex flex-col gap-2 rounded-sm border border-gray-300 bg-white p-2 shadow-sm">
				<div className="flex justify-between">
					<h2 className="text-xl font-semibold">Cards</h2>
					{setBreakdown.variants.length === 1 && (
						<span className="text-sm font-light">
							Total : {setBreakdown.variants[0].cards.length}
						</span>
					)}
				</div>
				{setBreakdown.variants.map((variant, index) => (
					<article
						key={index}
						className="mb-6 rounded-sm border border-gray-300 bg-gray-50 p-2 shadow-sm last:mb-0"
					>
						{setBreakdown.variants.length > 1 && (
							<div className="mb-2 flex justify-between">
								<h3 className="font-semibold">
									{variant.name}
								</h3>
								<span className="text-sm font-light">
									Total : {variant.cards.length}
								</span>
							</div>
						)}
						<SetCardFeed cards={variant.cards} />
					</article>
				))}
			</section>
		</main>
	);
}
