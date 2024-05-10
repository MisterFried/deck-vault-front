"use client";

// ** Import core packages
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ** Import third party
import { motion } from "framer-motion";

// ** Import pages

// ** Import sub pages / sections

// ** Import components

// ** Import state manager

// ** Import hooks

// ** Import APIs

// ** Import utils / lib

// ** Import assets

// ** Import icons
import { Menu, Search, User } from "lucide-react";

// ** Import config

// ** Import styles

// ** Import Types

// ** Framer motion variants
const variants = {
	open: { opacity: 1, y: 0 },
	closed: { opacity: 0, y: "-50%" },
};

/**
 * Renders the header component of the application.
 *
 * @return The rendered header component.
 */
export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const headerRef = useRef<HTMLElement | null>(null);

	const [width, setWidth] = useState(0);

	useEffect(() => {
		window.addEventListener("resize", () => setWidth(window.innerWidth));
	}, []);

	// On mobile devices, add an event listener to close the menu when the user clicks outside
	// On desktop devices, always display the menu and remove the event listener
	useEffect(() => {
		if (width === 0) setWidth(window.innerWidth);

		function handleOutsideClick(event: MouseEvent) {
			if (!headerRef.current?.contains(event.target as Node)) {
				setIsMenuOpen(false);
			}
		}

		if (width < 768) {
			document.addEventListener("click", handleOutsideClick);
		} else {
			document.removeEventListener("click", handleOutsideClick);
			setIsMenuOpen(true);
		}

		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, [width]);

	return (
		<header
			ref={headerRef}
			className="sticky top-0 z-50 grid grid-cols-3 items-center bg-main-500 p-2 text-white shadow-md md:flex md:gap-4 md:px-4"
		>
			<button
				className="justify-self-start rounded-sm px-1 transition-all hover:bg-main-100 hover:bg-opacity-10 focus:bg-main-100 focus:bg-opacity-10 md:hidden"
				aria-label="Menu"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			>
				<Menu />
			</button>
			<Link href="/" className="justify-self-center text-lg font-bold">
				DeckVault
			</Link>
			<motion.nav
				animate={isMenuOpen ? "open" : "closed"}
				variants={variants}
				transition={{ duration: 0.2, ease: "easeInOut" }}
				className={`absolute left-0 top-full w-full bg-main-500 bg-opacity-90 p-2 backdrop-blur-md md:static md:w-fit md:grow md:py-0 ${
					isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
				}`}
			>
				<ul className="grid grid-cols-2 gap-2 md:flex">
					<li>
						<Link
							tabIndex={isMenuOpen ? 0 : -1}
							className="block rounded-sm border border-main-600 bg-main-600 px-2 py-1 text-center font-medium transition-all hover:bg-main-100 hover:bg-opacity-10 focus:bg-main-100 focus:bg-opacity-10 md:border-0 md:bg-transparent"
							href="/"
							onClick={() => {
								if (width < 768) setIsMenuOpen(false);
							}}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							tabIndex={isMenuOpen ? 0 : -1}
							className="block rounded-sm border border-main-600 bg-main-600 px-2 py-1 text-center font-medium transition-all hover:bg-main-100 hover:bg-opacity-10 focus:bg-main-100 focus:bg-opacity-10 md:border-0 md:bg-transparent"
							href="/cards"
							onClick={() => {
								if (width < 768) setIsMenuOpen(false);
							}}
						>
							Cards
						</Link>
					</li>
					<li>
						<Link
							tabIndex={isMenuOpen ? 0 : -1}
							className="block rounded-sm border border-main-600 bg-main-600 px-2 py-1 text-center font-medium transition-all hover:bg-main-100 hover:bg-opacity-10 focus:bg-main-100 focus:bg-opacity-10 md:border-0 md:bg-transparent"
							href="/sets"
							onClick={() => {
								if (width < 768) setIsMenuOpen(false);
							}}
						>
							Sets
						</Link>
					</li>
					<li>
						<Link
							tabIndex={isMenuOpen ? 0 : -1}
							className="block rounded-sm border border-main-600 bg-main-600 px-2 py-1 text-center font-medium transition-all hover:bg-main-100 hover:bg-opacity-10 focus:bg-main-100 focus:bg-opacity-10 md:border-0 md:bg-transparent"
							href="/banlist"
							onClick={() => {
								if (width < 768) setIsMenuOpen(false);
							}}
						>
							Banlist
						</Link>
					</li>
					<li>
						<Link
							tabIndex={isMenuOpen ? 0 : -1}
							className="block rounded-sm border border-main-600 bg-main-600 px-2 py-1 text-center font-medium transition-all hover:bg-main-100 hover:bg-opacity-10 focus:bg-main-100 focus:bg-opacity-10 md:border-0 md:bg-transparent"
							href="/archetypes"
							onClick={() => {
								if (width < 768) setIsMenuOpen(false);
							}}
						>
							Archetypes
						</Link>
					</li>
				</ul>
			</motion.nav>
			<div className=" flex gap-2 justify-self-end">
				<button
					className="rounded-sm px-1 transition-all hover:bg-main-100 hover:bg-opacity-10 focus:bg-main-100 focus:bg-opacity-10"
					aria-label="Search"
					onClick={() => console.log("Search clicked")}
				>
					<Search />
				</button>
				<button
					className="rounded-sm px-1 transition-all hover:bg-main-100 hover:bg-opacity-10 focus:bg-main-100 focus:bg-opacity-10"
					aria-label="User"
					onClick={() => console.log("User clicked")}
				>
					<User />
				</button>
			</div>
		</header>
	);
}
