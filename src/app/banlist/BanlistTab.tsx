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

// ** Import config

// ** Import styles

// ** Import Types

/**
 * Renders a tab (client) component for the banlist page. The tab's status is determined by the 'status' prop.
 * On click, the component update the URL with the 'status' query parameter.
 *
 * @param status - The status of the tab (either 'banned', 'limited', or 'semi-limited').
 * @return The rendered banlist tab component.
 */
export default function BanlistTab({ status }: { status: string }) {
	const currentSearchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const activeStatus = currentSearchParams.get("status");

	function handleTabClick() {
		const newSearchParams = new URLSearchParams(currentSearchParams);
		newSearchParams.set("status", status);
		replace(`${pathname}?${newSearchParams.toString()}`);
	}

	// If the 'status' query parameter is not set, set it to 'banned'
	useEffect(() => {
		if (!activeStatus) {
			replace(`${pathname}?status=banned`);
		}
	}, [activeStatus, pathname, replace]);

	return (
		<button
			onClick={handleTabClick}
			className={`banlistTab relative border border-gray-300 px-4 py-2 focus:z-10 ${activeStatus === status && "active"}`}
		>
			{status}
		</button>
	);
}
