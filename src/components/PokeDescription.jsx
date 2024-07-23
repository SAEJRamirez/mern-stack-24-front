import {IconButton, Tooltip, Typography} from "@material-tailwind/react";
import { IoIosFemale, IoIosMale } from "react-icons/io";
import { CgPokemon } from "react-icons/cg";
import {useState} from "react";


const PokeDescription = () => {

    const [textButton, setTextButton] = useState(false)

    return (
        <section className="flex flex-col items-center">
            <div className="p-2 rounded-l-xl border border-purple-100 rounded-xl bg-blue-400 w-96 h-52 flex flex-wrap">
                <div className="w-1/3">
                    <Typography variant="lead" color="white">Taille</Typography>
                    <Typography variant="p" className="font-bold">0.7 m</Typography>
                </div>
                <div className="w-1/3">
                    <Typography variant="lead" color="white">Catégorie</Typography>
                    <Typography variant="p" className="font-bold">Graine</Typography>
                </div>
                <div className="w-1/3">
                    <Typography variant="lead" color="white">Poids</Typography>
                    <Typography variant="p" className="font-bold">6,9 kg</Typography>
                </div>
                <div className="w-1/3">
                    <Typography variant="lead" color="white">Talent</Typography>
                    <Typography variant="p" className="font-bold cursor-pointer">
                        <Tooltip
                            placement="top-start"
                            animate={{ mount: { scale: 1, y: 0 }, unmount: { scale: 0, y: 25 }}}
                            content="Augmente la puissance des capacités de type Plante du Pokémon quand il a perdu une certaine quantité de PV."
                            className="w-64 cursor-pointer"
                        >
                            Engrais*
                        </Tooltip>
                    </Typography>
                </div>
                <div className="flex flex-col items-center flex-wrap w-1/3">
                    <Typography variant="lead" color="white">Sexe</Typography>
                    <div className="flex">
                        <IoIosMale size={24} />
                        <IoIosFemale size={24} />
                    </div>
                </div>
            </div>
            <div className="w-96 mt-6">
                {textButton ? (
                    <Typography variant="p" className="text-left">Il porte une graine sur son dos depuis la naissance. Elle croît à mesure qu’il grandit.</Typography>
                ) : (
                    <Typography variant="p" className="text-left">Au début de sa vie, il se nourrit des nutriments accumulés dans la graine sur son dos. Cela lui permet de grandir.</Typography>
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
    );
};

export default PokeDescription;