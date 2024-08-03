import {useNavigate, useParams} from "react-router-dom";
import {Button, Input, Spinner, Typography} from "@material-tailwind/react";
import {useEffect, useState} from "react";
import {usePokemonStore} from "../stores/pokemonStore.js";


const EditPoke = () => {
    const param = useParams().id
    const [num, setNum] = useState("")
    const [name, setName] = useState("")
    const [img, setImg] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const navigate = useNavigate()
    const pokemonById = usePokemonStore((state) => state.pokemonById)
    const loading = usePokemonStore((state) => state.loading)
    const getPokemonById = usePokemonStore((state) => state.getPokemonById)
    const editPokemon = usePokemonStore((state) => state.editPokemon)

    useEffect(() => {
        getPokemonById(param)
    }, [])

    useEffect(() => {
        setNum(pokemonById?.pokemon_num)
        setName(pokemonById?.pokemon_name)
        setImg(pokemonById?.pokemon_infos?.pokemon_img)
    }, [pokemonById])

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrorMsg("")
        if(!num || !name || !img) {
            setErrorMsg("Merci de remplir tous les champs.")
        } else {
            const formData = {
                num,
                name,
                img
            }
            editPokemon(param, formData )
            navigate("/admin")
        }
    }


    return (
        <section className="m-10">
            {pokemonById.length !== 0 && (
                <div
                    className="p-10 rounded-l-xl border border-purple-100 rounded-xl bg-gradient-to-b from-blue-gray-700 to-black">
                    {loading && (
                        <Spinner className="w-40 h-40 mx-auto" color="light-green"/>
                    )}
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
                                value={num || ""}
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
                                value={name || ""}
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
                                value={img || ""}
                                onChange={(e) => setImg(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="text-center my-6">
                        <Typography variant="lead" color="red" className="mb-6">{errorMsg}</Typography>
                        <Button color="yellow" onClick={handleSubmit}>Enregistrer</Button>
                    </div>
                </div>
            )}

        </section>
    );
};

export default EditPoke;