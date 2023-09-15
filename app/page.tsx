import { PokemonGrid } from '@/components/PokemonGrid'
import Image from 'next/image'
import { getPokemonList } from '@/lib/pokemonApi'

export default async function Home() {
  // load in data
  const pokemonList = await getPokemonList();
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
    <PokemonGrid pokemonList={pokemonList} />
  )
}
