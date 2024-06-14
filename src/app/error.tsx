"use client";
import Link from "next/link";

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<main className="flex grow flex-col gap-4 p-2">
			<section className="border-grey-200 flex flex-col gap-2 border bg-white p-2">
				<h1 className="text-xl font-bold">
					Oops, something wrong happend !
				</h1>
				<p>
					You can either try to acces the page again or go back to the
					homepage
				</p>
				<div className="flex justify-center gap-2">
					<button
						className="rounded-sm border border-gray-200 p-2 shadow-sm"
						onClick={() => reset()}
					>
						Try again
					</button>
					<Link
						className="border-grey-200 rounded-sm border p-2 shadow-sm"
						href={"/"}
					>
						Homepage
					</Link>
				</div>
			</section>
		</main>
	);
}
