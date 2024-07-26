import React, {useEffect} from 'react';
import PokeCard from "../components/PokeCard.jsx";
import {IconButton, Option, Select, Spinner, Typography} from "@material-tailwind/react";
import {TbReload} from "react-icons/tb";
import { TbSortAscendingNumbers, TbSortDescendingNumbers, TbZoomReset  } from "react-icons/tb";
import {usePokemonStore} from "../stores/pokemonStore.js";


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
                    <div className="flex gap-6 items-center border-r border-r-white pr-4">
                        <Typography
                            variant="lead"
                            color="white"
                        >
                            Aléatoire
                        </Typography>
                        <IconButton color="purple">
                            <i><TbReload size={20}/></i>
                        </IconButton>
                    </div>
                    <div className="flex gap-6 items-center border-r border-r-white pr-4">
                        <Typography
                            variant="lead"
                            color="white"
                        >
                            Ordre croissant
                        </Typography>
                        <IconButton color="light-green">
                            <i><TbSortAscendingNumbers size={24}/></i>
                        </IconButton>
                    </div>
                    <div className="flex gap-6 items-center border-r border-r-white pr-4">
                        <Typography
                            variant="lead"
                            color="white"
                        >
                            Ordre décroissant
                        </Typography>
                        <IconButton color="yellow">
                            <i><TbSortDescendingNumbers size={24}/></i>
                        </IconButton>
                    </div>
                    <div className="flex gap-6 items-center border-r border-r-white pr-4">
                        <Typography
                            variant="lead"
                            color="white"
                        >
                            Type
                        </Typography>
                        <Select color="light-blue" variant="static" className="text-white">
                            <Option>Acier</Option>
                            <Option>Combat</Option>
                            <Option>Dragon</Option>
                            <Option>Eau</Option>
                            <Option>Électrik</Option>
                            <Option>Fée</Option>
                            <Option>Feu</Option>
                            <Option>Glace</Option>
                            <Option>Insecte</Option>
                            <Option>Normal</Option>
                            <Option>Plante</Option>
                            <Option>Poison</Option>
                            <Option>Psy</Option>
                            <Option>Roche</Option>
                            <Option>Sol</Option>
                            <Option>Spectre</Option>
                            <Option>Ténèbre</Option>
                            <Option>Vol</Option>
                        </Select>
                    </div>
                    <div className="flex gap-6 items-center border-r border-r-white pr-4">
                        <Typography
                            variant="lead"
                            color="white"
                        >
                            Réinitialiser
                        </Typography>
                        <IconButton color="yellow">
                            <i><TbZoomReset size={20}/></i>
                        </IconButton>
                    </div>
                </div>
                <div className="flex justify-center pt-10">
                    {loading && (
                        <Spinner className="h-20 w-20" color="blue"/>
                    )}
                </div>
                <div className="flex flex-wrap justify-center gap-20 mt-16">
                    {pokemons.map((pokemon, index) => (
                        <PokeCard pokemon={pokemon} key={index}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pokedex;