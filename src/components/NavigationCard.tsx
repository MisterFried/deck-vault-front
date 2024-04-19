// ** Import core packages
import Image, { StaticImageData } from "next/image";
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

/**
 * Renders a navigation card component.
 *
 * @param label - The label for the navigation card.
 * @param href - The URL for the navigation card.
 * @param image - The image data for the navigation card.
 * @return The rendered navigation card component.
 */
export default function NavigationCard({
	label,
	href,
	image,
}: {
	label: string;
	href: string;
	image: StaticImageData;
}) {
	return (
		<Link
			href={href}
			className="group relative aspect-[8/5] overflow-hidden rounded-sm shadow-md"
			aria-label={label}
		>
			<Image
				src={image}
				alt={label}
				className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover transition-all group-hover:scale-110 group-focus:scale-110"
			/>
			<p className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#0c0c0c80] to-[#0c0c0c60] px-1 py-2 text-center font-medium  text-white backdrop-blur-[1px]">
				{label}
			</p>
		</Link>
	);
}
