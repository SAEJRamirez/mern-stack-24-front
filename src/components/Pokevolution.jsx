import {Chip, Typography} from "@material-tailwind/react";
import { MdDoubleArrow } from "react-icons/md";
import {usePokemonStore} from "../stores/pokemonStore.js";


const Pokevolution = () => {

    const singlePokemon = usePokemonStore((state) => state.singlePokemon)


    const lowerCase = (value) => {
        if(value) {
            return value.toLowerCase()
        }
        else return ""
    }

    return (
        <>
            {singlePokemon[0] && (
                <section className="bg-[url('/background-evolution.png')] bg-no-repeat bg-cover mx-20">
                    <Typography className="py-6 text-left pl-6" variant="lead" color="white">Évolutions</Typography>
                    <div className="flex justify-center items-center gap-4">
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="h-40 w-40 rounded-full object-cover object-center border-4 border-white shadow-md shadow-gray-600 cursor-pointer"
                                src={`/pokemon/${lowerCase(singlePokemon[0]?.pokemon_infos.pokemon_evo_1_name)}.png`}
                                alt={`Image du Pokémon ${singlePokemon[0]?.pokemon_infos.pokemon_evo_1_name}`}/>
                            <div className="flex items-center gap-4">
                                <Typography variant="h5"
                                            color="white">{singlePokemon[0]?.pokemon_infos.pokemon_evo_1_name}</Typography>
                                <Typography variant="lead"
                                            className="text-gray-400">N°{singlePokemon[0]?.pokemon_infos.pokemon_evo_1_num}</Typography>
                            </div>
                            <div className="flex items-center gap-4 mt-6">
                                {singlePokemon[0] && singlePokemon[0].pokemon_type.map((el, index) => (
                                    <Chip key={index} value={el.name} size="sm" className="text-blue-gray-900"
                                          style={{background: `${el.background}`}}/>
                                ))}
                            </div>
                        </div>
                        <i><MdDoubleArrow size={80} color="white" className="mb-28"/></i>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="h-40 w-40 rounded-full object-cover object-center border-4 border-white shadow-md shadow-gray-600 cursor-pointer"
                                src={`/pokemon/${lowerCase(singlePokemon[0]?.pokemon_infos.pokemon_evo_2_name)}.png`}
                                alt={`Image du Pokémon ${singlePokemon[0]?.pokemon_infos.pokemon_evo_2_name}`}/>
                            <div className="flex items-center gap-4">
                                <Typography variant="h5"
                                            color="white">{singlePokemon[0]?.pokemon_infos.pokemon_evo_2_name}</Typography>
                                <Typography variant="lead"
                                            className="text-gray-400">N°{singlePokemon[0]?.pokemon_infos.pokemon_evo_2_num}</Typography>
                            </div>
                            <div className="flex items-center gap-4 mt-6">
                                {singlePokemon[0] && singlePokemon[0].pokemon_type.map((el, index) => (
                                    <Chip key={index} value={el.name} size="sm" className="text-blue-gray-900"
                                          style={{background: `${el.background}`}}/>
                                ))}
                            </div>
                        </div>
                        <i><MdDoubleArrow size={80} color="white" className="mb-28"/></i>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="h-40 w-40 rounded-full object-cover object-center border-4 border-white shadow-md shadow-gray-600 cursor-pointer"
                                src={`/pokemon/${lowerCase(singlePokemon[0]?.pokemon_infos.pokemon_evo_3_name)}.png`}
                                alt={`Image du Pokémon ${singlePokemon[0]?.pokemon_infos.pokemon_evo_3_name}`}/>
                            <div className="flex items-center gap-4">
                                <Typography variant="h5"
                                            color="white">{singlePokemon[0]?.pokemon_infos.pokemon_evo_3_name}</Typography>
                                <Typography variant="lead"
                                            className="text-gray-400">N°{singlePokemon[0]?.pokemon_infos.pokemon_evo_3_num}</Typography>
                            </div>
                            <div className="flex items-center gap-4 mt-6">
                                {singlePokemon[0] && singlePokemon[0].pokemon_type.map((el, index) => (
                                    <Chip key={index} value={el.name} size="sm" className="text-blue-gray-900"
                                          style={{background: `${el.background}`}}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>


    );
};

export default Pokevolution;