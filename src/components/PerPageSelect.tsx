"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

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

export default function PerPageSelect({
	options = [10, 25, 50, 100],
}: {
	options?: number[];
}) {
	const currentSearchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	function handlePerPageChange(perPage: string) {
		const newSearchParams = new URLSearchParams(currentSearchParams);
		newSearchParams.set("perPage", perPage);
		replace(`${pathname}?${newSearchParams.toString()}`);
	}

	useEffect(() => {
		if (!currentSearchParams.get("perPage")) {
			const newSearchParams = new URLSearchParams(currentSearchParams);
			newSearchParams.set("perPage", options[0].toString());
			replace(`${pathname}?${newSearchParams.toString()}`);
		}
	}, [currentSearchParams, options, pathname, replace]);

	return (
		<select
			className="rounded-sm border border-gray-300 px-2 py-1"
			onChange={e => handlePerPageChange(e.target.value)}
			defaultValue={currentSearchParams.get("perPage") || options[0]}
		>
			{options.map(option => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	);
}
