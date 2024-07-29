import {Chip, Progress, Typography} from "@material-tailwind/react";
import {useState} from "react";
import {usePokemonStore} from "../stores/pokemonStore.js";

const PokeStats = () => {

    const getPercent = (value) => {
        return (value * 100) / 15
    }

    const singlePokemon = usePokemonStore((state) => state.singlePokemon)

    return (
        <section className="flex justify-center items-center gap-6">
            <div className="p-2 border rounded-xl border-blue-400 w-1/4">
                <div>
                    <Typography variant="lead">Stats de base</Typography>
                </div>
                <div>
                    <div className="mb-2 flex items-center justify-center gap-4">
                        <Typography className="w-24" variant="paragraph">PV</Typography>
                        <Progress className="w-1/2" value={getPercent(singlePokemon[0]?.pokemon_infos.pokemon_pv)} color={"blue"} size="md"/>
                        <Typography className="w-1/3">{singlePokemon[0]?.pokemon_infos.pokemon_pv}/15</Typography>
                    </div>
                    <div className="mb-2 flex items-center justify-center gap-4">
                        <Typography className="w-24" variant="paragraph">Attaque</Typography>
                        <Progress className="w-1/2" value={getPercent(singlePokemon[0]?.pokemon_infos.pokemon_attack)} color={"blue"} size="md"/>
                        <Typography className="w-1/3">{singlePokemon[0]?.pokemon_infos.pokemon_attack}/15</Typography>
                    </div>
                    <div className="mb-2 flex items-center justify-start gap-4">
                        <Typography className="w-24" variant="paragraph">Défense</Typography>
                        <Progress className="w-1/2" value={getPercent(singlePokemon[0]?.pokemon_infos.pokemon_defense)} color={"blue"} size="md"/>
                        <Typography className="w-1/3">{singlePokemon[0]?.pokemon_infos.pokemon_defense}/15</Typography>
                    </div>
                    <div className="mb-2 flex items-center justify-start gap-4">
                        <Typography className="w-24" variant="paragraph">Attaque Spéciale</Typography>
                        <Progress className="w-1/2" value={getPercent(singlePokemon[0]?.pokemon_infos.pokemon_special_attack)} color={"blue"} size="md"/>
                        <Typography className="w-1/3">{singlePokemon[0]?.pokemon_infos.pokemon_special_attack}/15</Typography>
                    </div>
                    <div className="mb-2 flex items-center justify-start gap-4">
                        <Typography className="w-24" variant="paragraph">Défense Spéciale</Typography>
                        <Progress className="w-1/2" value={getPercent(singlePokemon[0]?.pokemon_infos.pokemon_special_defense)} color={"blue"} size="md"/>
                        <Typography className="w-1/3">{singlePokemon[0]?.pokemon_infos.pokemon_special_defense}/15</Typography>
                    </div>
                    <div className="mb-2 flex items-center justify-start gap-4">
                        <Typography className="w-24" variant="paragraph">Vitesse</Typography>
                        <Progress className="w-1/2" value={getPercent(singlePokemon[0]?.pokemon_infos.pokemon_speed)} color={"blue"} size="md"/>
                        <Typography className="w-1/3">{singlePokemon[0]?.pokemon_infos.pokemon_speed}/15</Typography>
                    </div>
                </div>
            </div>

            <div className="w-1/4">
                <div className="flex flex-wrap justify-start mb-6">
                    <Typography className="w-full text-left mb-6" variant="lead">Type</Typography>
                    <div className="flex gap-6">
                        {singlePokemon[0]?.pokemon_type.map((el, index) => (
                            <Chip key={index} value={el.name} size="sm" className="text-blue-gray-900" style={{ background:`${el.background}`  }} />
                        ))}
                    </div>

                </div>
                <div>
                    <Typography className="w-full text-left mb-6" variant="lead">Faiblesse(s)</Typography>
                    <div className="flex flex-wrap gap-6">
                        {singlePokemon[0]?.pokemon_weakness.map((el, index) => (
                            <Chip key={index} value={el.name} size="sm" className="text-blue-gray-900" style={{ background:`${el.background}`  }} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PokeStats;