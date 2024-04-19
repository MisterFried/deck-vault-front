"use client";

// ** Import core packages
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ** Import third party
import { Menu, Search, User } from "lucide-react";
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

	// Close the menu when the user clicks outside
	useEffect(() => {
		document.addEventListener("click", event => {
			if (!headerRef.current?.contains(event.target as Node)) {
				setIsMenuOpen(false);
			}
		});
	}, []);

	return (
		<header
			ref={headerRef}
			className="bg-main-500 relative grid grid-cols-3 p-2 text-white shadow-md"
		>
			<button
				className="hover:bg-main-100 focus:bg-main-100 z-10 justify-self-start rounded-sm px-1 transition-all hover:bg-opacity-10 focus:bg-opacity-10"
				aria-label="Menu"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			>
				<Menu />
			</button>
			<motion.nav
				animate={isMenuOpen ? "open" : "closed"}
				variants={variants}
				transition={{ duration: 0.2, ease: "easeInOut" }}
				className={`bg-main-500 absolute left-0 top-full w-full bg-opacity-90 p-2 backdrop-blur-md ${
					isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
				}`}
			>
				<ul className="grid grid-cols-2 gap-2">
					<li>
						<Link
							tabIndex={isMenuOpen ? 0 : -1}
							className="bg-main-600 border-main-600 hover:bg-main-100 focus:bg-main-100 block rounded-sm border px-2 py-1 text-center font-medium transition-all hover:bg-opacity-10 focus:bg-opacity-10"
							href="/"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							tabIndex={isMenuOpen ? 0 : -1}
							className="bg-main-600 border-main-600 hover:bg-main-100 focus:bg-main-100 block rounded-sm border px-2 py-1 text-center font-medium transition-all hover:bg-opacity-10 focus:bg-opacity-10"
							href="/cards"
						>
							Cards
						</Link>
					</li>
					<li>
						<Link
							tabIndex={isMenuOpen ? 0 : -1}
							className="bg-main-600 border-main-600 hover:bg-main-100 focus:bg-main-100 block rounded-sm border px-2 py-1 text-center font-medium transition-all hover:bg-opacity-10 focus:bg-opacity-10"
							href="/sets"
						>
							Sets
						</Link>
					</li>
					<li>
						<Link
							tabIndex={isMenuOpen ? 0 : -1}
							className="bg-main-600 border-main-600 hover:bg-main-100 focus:bg-main-100 block rounded-sm border px-2 py-1 text-center font-medium transition-all hover:bg-opacity-10 focus:bg-opacity-10"
							href="/banlist"
						>
							Banlist
						</Link>
					</li>
					<li>
						<Link
							tabIndex={isMenuOpen ? 0 : -1}
							className="bg-main-600 border-main-600 hover:bg-main-100 focus:bg-main-100 block rounded-sm border px-2 py-1 text-center font-medium transition-all hover:bg-opacity-10 focus:bg-opacity-10"
							href="/archetypes"
						>
							Archetypes
						</Link>
					</li>
				</ul>
			</motion.nav>
			<span className="z-10 justify-self-center text-lg font-bold">
				DeckVault
			</span>
			<div className="z-10 flex gap-2 justify-self-end">
				<button
					className="hover:bg-main-100 focus:bg-main-100 z-10 rounded-sm px-1 transition-all hover:bg-opacity-10 focus:bg-opacity-10"
					aria-label="Search"
					onClick={() => console.log("Search clicked")}
				>
					<Search />
				</button>
				<button
					className="hover:bg-main-100 focus:bg-main-100 z-10 rounded-sm px-1 transition-all hover:bg-opacity-10 focus:bg-opacity-10"
					aria-label="User"
					onClick={() => console.log("User clicked")}
				>
					<User />
				</button>
			</div>
		</header>
	);
}
