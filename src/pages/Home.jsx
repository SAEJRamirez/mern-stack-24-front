import {Button, Typography} from "@material-tailwind/react";
import PokeCard from "../components/PokeCard.jsx";

const Home = () => {
    return (
        <>
            <section className="m-10">
                <div
                    className="p-10 rounded-l-xl border border-purple-100 bg-[url('./assets/wallEctoplasma.jpg')] bg-no-repeat bg-cover bg-right">
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
                        Découvrir les pokémons
                    </Button>
                </div>
            </section>
            <section className="m-10 text-center">
                <div className="p-10 rounded-l-xl border border-purple-100 rounded-xl bg-gradient-to-b from-blue-gray-700 to-black">
                    <Typography
                        variant="h2"
                        color="white"
                    >
                        Découvrez 3 nouveaux amis aléatoire !
                    </Typography>
                    <div className="flex justify-center gap-20 mt-8">
                        <PokeCard />
                        <PokeCard />
                        <PokeCard />
                    </div>

                </div>
            </section>
        </>

    );
};

export default Home;