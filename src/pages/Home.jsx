import {Button, IconButton, Spinner, Typography} from "@material-tailwind/react";
import PokeCard from "../components/PokeCard.jsx";
import { TbReload } from "react-icons/tb";
import {usePokemonStore} from "../stores/pokemonStore.js";
import {useEffect} from "react";

const Home = () => {

    const randomPokemon = usePokemonStore((state) => state.randomPokemon)
    const loading = usePokemonStore((state) => state.loading)
    const getRandomPokemon = usePokemonStore((state) => state.getRandomPokemon)

    useEffect(() => {
        getRandomPokemon()
    }, [])

    //TODO Ne pas oublier les notifications avec Toastify ou notifs de matérial Tailwind
    //J'en suis au Auth

    return (
        <>
            <section className="m-10">
                <div
                    className="p-10 rounded-l-xl border border-purple-100 bg-[url('/wallEctoplasma.jpg')] bg-no-repeat bg-cover bg-right">
                    <Typography
                        variant="small"
                        color="white"
                        className="font-bold mb-2"
                    >
                        Votre pokédex personnel
                    </Typography>
                    <Typography variant="h1" color="white">
                        Collectionnez les tous !
                    </Typography>
                    <Typography
                        className="mt-2 mb-6 !text-base text-gray-200"
                    >
                        Prêt a capturer vos pokémons préférés ? Sortez vos pokéball et n'attendez plus !
                    </Typography>
                    <Button variant="filled" color="deep-purple">
                        <a href="/pokedex">Découvrir les pokémon</a>
                    </Button>
                </div>
            </section>
            <section className="m-10 text-center">
                <div className="p-10 rounded-l-xl border border-purple-100 rounded-xl bg-gradient-to-b from-blue-gray-700 to-black">
                    <div className="flex justify-center items-center gap-6">
                        <Typography
                            variant="h2"
                            color="white"
                        >
                            Découvrez 3 nouveaux amis aléatoire !
                        </Typography>
                        <IconButton color="purple" onClick={getRandomPokemon}>
                            <i><TbReload size={20}/></i>
                        </IconButton>
                    </div>
                    <section className="flex justify-center gap-20 mt-12">
                        {loading && (
                            <Spinner className="h-20 w-20" color="blue"/>
                        )}
                        {randomPokemon.map((pokemon, index) => (
                            <PokeCard pokemon={pokemon} key={index} />
                        ))}
                    </section>
                </div>
            </section>
        </>

    );
};

export default Home;