"use client";

// ** Import core packages
import { useEffect, useState } from "react";

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
import { ArrowUpCircle } from "lucide-react";

// ** Import config

// ** Import styles

// ** Import Types

/**
 * Renders a button component that scrolls to the top of the page when clicked.
 * The button is set to have a fixed position to the bottom right corner of the page.
 * On page that have a height inferior to twice the viewport, the button is hidden
 *
 * @return The rendered button component.
 */
export default function ScrollTopButton() {
	const [isShown, setIsShown] = useState(false);

	useEffect(() => {
		function showHideButton() {
			if (document.body.clientHeight > 2 * window.innerHeight)
				setIsShown(true);
			else setIsShown(false);
		}

		window.addEventListener("scroll", showHideButton);

		return () => window.removeEventListener("scroll", showHideButton);
	}, []);

	if (isShown)
		return (
			<button
				className="fixed bottom-4 right-4 z-50 rounded-full bg-main-500 p-2 text-white transition-all hover:bg-main-400 focus:bg-main-400"
				aria-label="Scroll to top"
				onClick={() => window.scrollTo({ top: 0 })}
			>
				<ArrowUpCircle />
			</button>
		);
}
