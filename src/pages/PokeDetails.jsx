import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Button, Typography} from "@material-tailwind/react";
import PokeDescription from "../components/PokeDescription.jsx";
import PokeStats from "../components/PokeStats.jsx";
import Pokevolution from "../components/Pokevolution.jsx";
import {usePokemonStore} from "../stores/pokemonStore.js";

const PokeDetails = () => {

    const param = useParams().name
    const pokeName = param.charAt(0).toUpperCase() + param.slice(1)
    const pokemon = usePokemonStore((state) => state.pokemon)
    const loading = usePokemonStore((state) => state.loading)
    const getSinglePokemon = usePokemonStore((state) => state.getSinglePokemon)

    useEffect(() => {
        getSinglePokemon(param)
    }, [])

    return (
        <section className="m-10 text-center">
            <div className="py-16 px-40 rounded-l-xl border border-purple-100 rounded-xl bg-gradient-to-b from-blue-gray-700 to-black">
                <div className="bg-white rounded-l-xl">
                    <div className="pt-6">
                        <Typography variant="h1">
                            {pokemon[0].pokemon_infos.pokemon_name}
                        </Typography>
                    </div>
                    <div className="flex justify-center items-start gap-6 mt-10">
                        <img className="w-1/4 bg-gray-300"
                             src={`${pokemon[0].pokemon_infos.pokemon_img}`}
                             alt={`Image du Pokémon ${pokemon[0].pokemon_infos.pokemon_name}`}/>
                        <PokeDescription pokemon={pokemon}/>
                    </div>
                    <div className="mt-10">
                        <PokeStats/>
                    </div>
                    <div className="mt-10">
                        <Pokevolution />
                    </div>
                    <div className="mt-10 pb-10">
                        <Button>
                            <a href="/pokedex">Plus de Pokémon</a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PokeDetails;