import {useParams} from "react-router-dom";
import {Button, Input, Typography} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import {usePokemonStore} from "../stores/pokemonStore.js";


const EditPoke = () => {
    const param = useParams().id

    const [num, setNum] = useState("")
    const [name, setName] = useState("")
    const [img, setImg] = useState("")
    const pokemonById = usePokemonStore((state) => state.pokemonById)
    const loading = usePokemonStore((state) => state.loading)
    const getPokemonById = usePokemonStore((state) => state.getPokemonById)

    useEffect(() => {
        getPokemonById(param)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(num, name, img)
    }


    return (
        <section className="m-10">
            {pokemonById.length !== 0 && (
                <div
                    className="p-10 rounded-l-xl border border-purple-100 rounded-xl bg-gradient-to-b from-blue-gray-700 to-black">
                    <div className="flex justify-center items-center gap-6 mb-8">
                        <Typography
                            variant="h2"
                            color="white"
                        >
                            Modifier {pokemonById?.pokemon_name}
                        </Typography>
                    </div>
                    <div className="flex flex-col items-center gap-6 p-2">
                        <div className="flex items-center gap-6 w-full">
                            <Typography color="white">Numéro</Typography>
                            <Typography color="light-green">{pokemonById?.pokemon_num}</Typography>
                            <Input
                                variant="outlined"
                                color="white"
                                label="Numéro"
                                name="num"
                                type="text"
                                value={pokemonById?.pokemon_num}
                                onChange={(e) => setNum(e.target.value)}/>
                        </div>
                        <div className="flex items-center gap-6 w-full">
                            <Typography color="white">Nom</Typography>
                            <Typography color="light-green">{pokemonById?.pokemon_name}</Typography>
                            <Input
                                variant="outlined"
                                color="white"
                                label="Nom"
                                type="text"
                                name="name"
                                value={pokemonById?.pokemon_name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-6 w-full">
                            <Typography color="white">Image</Typography>
                            <Typography color="light-green">{pokemonById?.pokemon_infos.pokemon_img}</Typography>
                            <Input
                                variant="outlined"
                                color="white"
                                placeholder="Chemin de l'image"
                                label="Image"
                                name="img"
                                type="text"
                                value={pokemonById?.pokemon_infos.pokemon_img}
                                onChange={(e) => setImg(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="text-center my-10">
                        <Button color="yellow" onClick={handleSubmit}>Enregistrer</Button>
                    </div>
                </div>
            )}

        </section>
    );
};

export default EditPoke;