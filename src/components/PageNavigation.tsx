"use client";

// ** Import core packages
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

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
import {
	ChevronFirst,
	ChevronLast,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";

// ** Import config

// ** Import styles

// ** Import Types

/**
 * Renders a component with buttons to navigate through pages.
 *
 * @param totalPages - The total number of pages.
 * @return The pageNavigation component.
 */
export default function PageNavigation({ totalPages }: { totalPages: number }) {
	const currentSearchParams = useSearchParams();
	const currentPage = Number(currentSearchParams.get("page")) || 1;
	const pathname = usePathname();
	const { replace } = useRouter();

	function handlePageChange(page: number) {
		const newSearchParams = new URLSearchParams(currentSearchParams);
		newSearchParams.set("page", String(page));
		replace(`${pathname}?${newSearchParams.toString()}`);
	}

	useEffect(() => {
		if (currentPage > totalPages) {
			const newSearchParams = new URLSearchParams(currentSearchParams);
			newSearchParams.set("page", String(totalPages));
			replace(`${pathname}?${newSearchParams.toString()}`);
		}

		if (currentPage < 1) {
			const newSearchParams = new URLSearchParams(currentSearchParams);
			newSearchParams.set("page", "1");
			replace(`${pathname}?${newSearchParams.toString()}`);
		}

		if (!currentSearchParams.get("page")) {
			const newSearchParams = new URLSearchParams(currentSearchParams);
			newSearchParams.set("page", "1");
			replace(`${pathname}?${newSearchParams.toString()}`);
		}
	}, [currentPage, currentSearchParams, pathname, replace, totalPages]);

	return (
		<div className="grid grid-cols-[42px_42px_1fr_42px_42px] gap-2">
			{currentPage > 1 ? (
				<>
					<button
						className="rounded-sm border border-gray-300 bg-white px-2 py-1"
						onClick={() => {
							currentPage - 10 <= 0
								? handlePageChange(1)
								: handlePageChange(currentPage - 10);
						}}
					>
						<ChevronFirst />
					</button>
					<button
						aria-label="Previous page"
						className="rounded-sm border border-gray-300 bg-white px-2 py-1"
						onClick={() => handlePageChange(currentPage - 1)}
					>
						<ChevronLeft />
					</button>
				</>
			) : (
				<>
					<div></div>
					<div></div>
				</>
			)}

			{totalPages > 1 && (
				<span className="mx-auto text-sm">
					{currentPage}/{totalPages}
				</span>
			)}

			{currentPage < totalPages ? (
				<>
					<button
						aria-label="Next page"
						className="rounded-sm border border-gray-300 bg-white px-2 py-1"
						onClick={() => handlePageChange(currentPage + 1)}
					>
						<ChevronRight />
					</button>
					<button
						className="rounded-sm border border-gray-300 bg-white px-2 py-1"
						onClick={() => {
							currentPage + 10 > totalPages
								? handlePageChange(totalPages)
								: handlePageChange(currentPage + 10);
						}}
					>
						<ChevronLast />
					</button>
				</>
			) : (
				<>
					<div></div>
					<div></div>
				</>
			)}
		</div>
	);
}
