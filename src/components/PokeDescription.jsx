import {IconButton, Spinner, Tooltip, Typography} from "@material-tailwind/react";
import { IoIosFemale, IoIosMale } from "react-icons/io";
import { CgPokemon } from "react-icons/cg";
import {useState} from "react";
import {usePokemonStore} from "../stores/pokemonStore.js";


const PokeDescription = () => {

    const [textButton, setTextButton] = useState(false)
    const singlePokemon = usePokemonStore((state) => state.singlePokemon)

    return (
        <>
            {singlePokemon[0] ? (
                <section className="flex flex-col items-center">
                    <div
                        className="p-2 rounded-l-xl border border-purple-100 rounded-xl bg-blue-400 w-96 h-52 flex flex-wrap">
                        <div className="w-1/3">
                            <Typography variant="lead" color="white">Taille</Typography>
                            <Typography variant="paragraph"
                                        className="font-bold">{singlePokemon[0]?.pokemon_infos.pokemon_width}</Typography>
                        </div>
                        <div className="w-1/3">
                            <Typography variant="lead" color="white">Catégorie</Typography>
                            <Typography variant="paragraph"
                                        className="font-bold">{singlePokemon[0]?.pokemon_infos.pokemon_category}</Typography>
                        </div>
                        <div className="w-1/3">
                            <Typography variant="lead" color="white">Poids</Typography>
                            <Typography variant="paragraph" className="font-bold">{singlePokemon[0]?.pokemon_infos.pokemon_weight}</Typography>
                        </div>
                        <div className="w-1/3">
                            <Typography variant="lead" color="white">Talent</Typography>
                            <Typography variant="paragraph" className="font-bold cursor-pointer">
                                <Tooltip
                                    placement="top-start"
                                    animate={{mount: {scale: 1, y: 0}, unmount: {scale: 0, y: 25}}}
                                    content={singlePokemon[0]?.pokemon_infos.pokemon_tooltip}
                                    className="w-64 cursor-pointer"
                                >
                                    {`${singlePokemon[0]?.pokemon_infos.pokemon_talent}*`}
                                </Tooltip>
                            </Typography>
                        </div>
                        <div className="flex flex-col items-center flex-wrap w-1/3">
                            <Typography variant="lead" color="white">Sexe</Typography>
                            <div className="flex">
                                {singlePokemon[0]?.pokemon_infos.pokemon_gender.length > 0 ? (
                                    <>
                                        {singlePokemon[0]?.pokemon_infos.pokemon_gender.includes('male') && (
                                            <IoIosMale size={24}/>
                                        )}
                                        {singlePokemon[0]?.pokemon_infos.pokemon_gender.includes('female') && (
                                            <IoIosFemale size={24}/>
                                        )}
                                    </>
                                ) : (
                                    <Typography variant="lead">Non définit</Typography>
                                )}

                            </div>
                        </div>
                    </div>
                    <div className="w-96 mt-6">
                        {textButton ? (
                            <Typography variant="paragraph" className="text-left">
                                {singlePokemon[0]?.pokemon_infos.pokemon_blue_text}
                            </Typography>
                        ) : (
                            <Typography variant="paragraph" className="text-left">
                                {singlePokemon[0]?.pokemon_infos.pokemon_red_text}
                            </Typography>
                        )}
                        <div className="text-left flex items-center mt-6 gap-3">
                            <Typography variant="lead">Versions:</Typography>
                            <IconButton className="bg-blue-900" onClick={() => setTextButton(false)}>
                                <i><CgPokemon size={20}/></i>
                            </IconButton>
                            <IconButton className="bg-red-900" onClick={() => setTextButton(true)}>
                                <i><CgPokemon size={20}/></i>
                            </IconButton>
                        </div>
                    </div>
                </section>
            ) : <Spinner />}
        </>
    );
};

export default PokeDescription;