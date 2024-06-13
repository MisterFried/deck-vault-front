"use client"
import Link from "next/link"

export default function Error({error, reset}: {
  error: Error, reset: () => void
}) {
  return(
    <main className="flex grow flex-col gap-4 p-2">
      <section className="flex flex-col gap-2 p-2 border border-grey-200 bg-white">
        <h1 className="text-xl font-bold">Oops, something wrong happend !</h1>
        <p>
          You can either try to acces the page again or go back to the homepage
        </p>
        <div className="flex gap-2 justify-center">
          <button className="p-2 border border-gray-200 rounded-sm shadow-sm" onClick={() => reset()}>Try again</button>
          <Link className="p-2 border border-grey-200 rounded-sm shadow-sm" href={"/"}>Homepage</Link>
        </div>
      </section>
    </main>
  )
}
