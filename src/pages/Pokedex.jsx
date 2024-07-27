import React, {useEffect} from 'react';
import PokeCard from "../components/PokeCard.jsx";
import {Spinner, Typography} from "@material-tailwind/react";
import {usePokemonStore} from "../stores/pokemonStore.js";
import SearchBar from "../components/SearchBar.jsx";


const Pokedex = () => {

    const pokemons = usePokemonStore((state) => state.pokemon)
    const loading = usePokemonStore((state) => state.loading)
    const getPokemon = usePokemonStore((state) => state.getPokemons)

    useEffect(() => {
        getPokemon()
    }, [])

    return (
        <section className="m-10">
            <div
                className="p-10 rounded-l-xl border border-purple-100 rounded-xl bg-gradient-to-b from-blue-gray-700 to-black">
                <div className="flex justify-center items-center gap-6">
                    <Typography
                        variant="h2"
                        color="white"
                    >
                        Attrapez les tous !
                    </Typography>
                </div>
                <div className="flex justify-center gap-6 border border-white p-4 mt-6">
                    <SearchBar />
                </div>
                    <div className="flex justify-center pt-10">
                        {loading && (
                            <Spinner className="h-20 w-20" color="blue"/>
                        )}
                    </div>
                    <div className="flex flex-wrap justify-center gap-20 mt-16">
                        {pokemons?.map((pokemon, index) => (
                            <PokeCard pokemon={pokemon} key={index}/>
                        ))}
                    </div>
                </div>
        </section>
);
};

export default Pokedex;