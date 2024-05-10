// ** Import core packages
import type { Metadata } from "next";

// ** Import third party

// ** Import pages

// ** Import sub pages / sections

// ** Import components
import Header from "@/components/globalLayout/Header";
import Footer from "@/components/globalLayout/Footer";

// ** Import state manager

// ** Import hooks

// ** Import APIs

// ** Import utils / lib

// ** Import assets

// ** Import icons

// ** Import config

// ** Import styles
import { Inter } from "next/font/google";
import "./globals.css";

// ** Import Types

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "DeckVault",
	description: "DeckVault",
};

/**
 * Renders the root layout component.
 *
 * @param children - The children elements to render.
 * @return The rendered root layout.
 */
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} flex min-h-screen flex-col text-base`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
