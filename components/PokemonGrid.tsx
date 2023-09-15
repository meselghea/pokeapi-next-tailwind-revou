"use client"
import { useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { PokemonCard } from './PokemonCard';

// return data pokemon list
interface PokemonGridProps{
    pokemonList: any;
}
export function PokemonGrid({ pokemonList } : PokemonGridProps) {
const [ searchText, setSearchText ] = useState('');

console.log(pokemonList);
//filter the text
const searchFilter = ( pokemonList: any ) => {
    return  pokemonList.filter(
        (pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLocaleLowerCase())
    )
}
// save filtered name object
const filteredPokemonList = searchFilter(pokemonList);
// show the filtered

return (
    <>
    <div>
    <h3 className='py-6 text-2xl text-center'>
            Search For Your Pokemon!
        </h3>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='pokemonName'>
                Pokemon Name
            </Label>
            <Input
                type='text'
                value={searchText}
                id='pokemonName'
                placeholder='Pikachu'
                autoComplete='off'
                onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
        <h3 className='pt-12 pb-6 text-3xl text-center'>Pokemon Collection</h3>
    </div>
    {filteredPokemonList.length === 0 ? (
                <div className="text-center text-red-500">
                    No matching Pokemon found.
                </div>
            ) : (
                <div className="grid mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
                    {filteredPokemonList.map((pokemon: any) => {
                        return (
                            <PokemonCard
                                name={pokemon?.name}
                                key={pokemon.name + 'Card'}
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
}
