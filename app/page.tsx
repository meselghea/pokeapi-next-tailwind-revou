import Image from 'next/image'

export default function Home() {
  // load in data
  // we can pass data to a client components
  // filter search bar, poke cards
// text input -> "use client", access to useState to handle the input
// When text is inputted -> filter through our current poke data.
// pokeGrid, text input & show result : "use client"
// get data for the 151 pokemon from a server component
// pass the data to PokemonGrid

// 1. create pokemongrid (and more components)
// 2. load in data from pokemon API (151 Pokemon)
// 3. Pass in data to Pokemon Grid, show all the pokemon from API call

  return (
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>
      </div>
  )
}
