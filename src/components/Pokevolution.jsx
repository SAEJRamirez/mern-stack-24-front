import {Chip, Typography} from "@material-tailwind/react";
import { MdDoubleArrow } from "react-icons/md";
import {useEffect, useState} from "react";
import {usePokemonStore} from "../stores/pokemonStore.js";


const Pokevolution = () => {

    const [types, setTypes] = useState([])
    const singlePokemon = usePokemonStore((state) => state.singlePokemon)

    useEffect(() => {
        singlePokemon[0]?.pokemon_type_weakness?.map(el => {
            if(el.includes('t_')) {
                if(!types.includes(el.substring(2))) {
                    setTypes([
                        ...types,
                        el.substring(2)
                    ])
                }
            }
        })
    }, [singlePokemon])

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
                                <Typography variant="h5" color="white">{singlePokemon[0]?.pokemon_name}</Typography>
                                <Typography variant="lead"
                                            className="text-gray-400">N°{singlePokemon[0]?.pokemon_num}</Typography>
                            </div>
                            <div className="flex items-center gap-4 mt-6">
                                {types.length > 0 && types.map((type, index) => (
                                    <Chip key={index} value={type} size="sm" className="text-blue-gray-900"
                                          style={{backgroundColor: "#9bcc50"}}/>
                                ))}
                            </div>
                        </div>
                        <i><MdDoubleArrow size={80} color="white" className="mb-28"/></i>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="h-40 w-40 rounded-full object-cover object-center border-4 border-white shadow-md shadow-gray-600 cursor-pointer"
                                src="/pokemon/herbizarre.png" alt="Nom du pokemon"/>
                            <div className="flex items-center gap-4">
                                <Typography variant="h5" color="white">Herbizarre</Typography>
                                <Typography variant="lead" className="text-gray-400">N°0002</Typography>
                            </div>
                            <div className="flex items-center gap-4 mt-6">
                                <Chip value="Plante" size="sm" className="text-blue-gray-900 w-24"
                                      style={{backgroundColor: "#9bcc50"}}/>
                                <Chip value="Poison" className="text-white w-24" style={{backgroundColor: "#b97fc9"}}/>
                            </div>
                        </div>
                        <i><MdDoubleArrow size={80} color="white" className="mb-28"/></i>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="h-40 w-40 rounded-full object-cover object-center border-4 border-white shadow-md shadow-gray-600 cursor-pointer"
                                src="/pokemon/florizarre.png" alt="Nom du pokemon"/>
                            <div className="flex items-center gap-4">
                                <Typography variant="h5" color="white">Florizarre</Typography>
                                <Typography variant="lead" className="text-gray-400">N°0003</Typography>
                            </div>
                            <div className="flex items-center gap-4 mt-6">
                                <Chip value="Plante" size="sm" className="text-blue-gray-900 w-24"
                                      style={{backgroundColor: "#9bcc50"}}/>
                                <Chip value="Poison" className="text-white w-24" style={{backgroundColor: "#b97fc9"}}/>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>


    );
};

export default Pokevolution;