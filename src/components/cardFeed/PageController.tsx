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
import { ArrowLeftIcon, ArrowRight } from "lucide-react";

// ** Import config

// ** Import styles

// ** Import Types

// ** Types
interface PageControllerProps {
	currentPage: number;
	setCurrentPage: (page: number) => void;
	totalPages: number;
}

/**
 * Renders the PageController component that allows the user to navigate between pages via two buttons.
 *
 * @param currentPage - The current page number.
 * @param setCurrentPage - Function to set the current page.
 * @param totalPages - The total number of pages.
 * @return The rendered PageController component.
 */
export default function PageController({
	currentPage,
	setCurrentPage,
	totalPages,
}: PageControllerProps) {
	const changePage = (direction: number) => {
		window.scrollTo({ top: 0 });
		setCurrentPage(currentPage + direction);
	};

	return (
		<div className="grid grid-cols-3 gap-2">
			{currentPage > 1 ? (
				<button
					className="justify-self-start rounded-sm bg-main-600 p-1 text-main-50 transition-all hover:bg-main-400 focus:bg-main-400"
					onClick={() => changePage(-1)}
					aria-label="Previous page"
				>
					<ArrowLeftIcon />
				</button>
			) : (
				<div></div>
			)}
			<span className="self-center justify-self-center text-sm font-light">
				Page {currentPage} of {totalPages}
			</span>
			{currentPage < totalPages ? (
				<button
					className="justify-self-end rounded-sm bg-main-600 p-1 text-main-50 transition-all hover:bg-main-400 focus:bg-main-400"
					onClick={() => changePage(1)}
					aria-label="Next page"
				>
					<ArrowRight />
				</button>
			) : (
				<div></div>
			)}
		</div>
	);
}
