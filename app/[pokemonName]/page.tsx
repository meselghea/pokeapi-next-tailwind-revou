import { getPokemon } from "@/lib/pokemonApi";
import Image from "next/image";
import { PokemonImage } from "@/components/PokemonImage";
import { Progress } from "@/components/ui/progress";
// localhost:3000/pokemonname

// pokemonName , show pokemon detail page

export default async function PokemonPage({ params } : {params: {pokemonName: string}}) {
   // Object  destructuring
   const { pokemonName } = params;
   // get the api data
   const pokemonObject = await getPokemon(pokemonName);
console.log(pokemonObject);
   return (
    <>
        <h1 className='pt-4 text-4xl text-bold'>
        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1) }
        </h1>
        <div className='m-4' style={{position: 'relative', width: '300px', height:'300px'}}>

            <PokemonImage 
                image={pokemonObject.sprites.other['official-artwork'].front_default } 
                name={pokemonName}
            />
        </div>
        <h3>Weight: {pokemonObject.weight} </h3>
        <div className='flex-col'>
        {pokemonObject.stats.map((statObject : any) => {
            const statName = statObject.stat.name;
            const statValue = statObject.base_stat;
            return (
                <div className='flex items-stretch' style={{width: '500px'}} key={statObject.stat.name}>
                    <h3 className='w-2/4 p-3'>{statName} {statValue} </h3>
                    <Progress className='w-2/4 m-auto' value={statValue} />
                </div>
            )
        })}
        </div>
    </>
)
}