import React, {useState} from 'react';
import {Button, Card, Checkbox, Chip, Input, Textarea, Typography} from "@material-tailwind/react";

const AddPoke = () => {

    const [inputs, setInputs] = useState({})
    const [checkbox, setCheckbox] = useState({})

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs(values => ({...values, [name]: value}))
    }
    const handleCheckboxChange = (e) => {
        const name = e.target.name
        const checked = e.target.checked
        setCheckbox(values => ({...values, [name]: checked}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs)
        console.log(checkbox)
    }


    return (
        <section className="flex justify-center m-16 bg-gradient-to-b from-blue-gray-700 to-black rounded-2xl">
            <Card className="m-10 p-10 flex flex-col justify-center items-center w-1/2">
                <Typography variant="h1" color="blue-gray">Ajouter un Pokemon</Typography>
                <form className="mt-10">
                    <div className="mb-1 flex flex-wrap justify-center gap-8">
                        <div className="p-4 flex flex-col gap-4 border border-blue-gray-400 rounded-2xl w-1/3">
                            <Typography variant="lead" className="-mb-3" color="blue-gray">Numéro</Typography>
                            <Input
                                variant="outlined"
                                size="md"
                                placeholder="Numéro du Pokemon"
                                label="Numéro du Pokemon"
                                color="blue-gray"
                                name="pokemon_num"
                                value={inputs.pokemon_num || ""}
                                onChange={(e) => handleChange(e)}
                            />
                            <Typography variant="lead" className="-mb-3" color="blue-gray">Nom</Typography>
                            <Input
                                variant="outlined"
                                size="md"
                                placeholder="Nom du Pokemon"
                                label="Nom du Pokemon"
                                color="blue-gray"
                                name="pokemon_name"
                                value={inputs.pokemon_name || ""}
                                onChange={(e) => handleChange(e)}
                            />
                            <Typography variant="lead" className="-mb-3" color="blue-gray">Image</Typography>
                            <Input
                                variant="outlined"
                                size="md"
                                placeholder="Chemin de l'image"
                                label="Image du Pokemon"
                                color="blue-gray"
                                name="pokemon_img"
                                value={inputs.pokemon_img || ""}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>

                        <div className="p-4 flex flex-col gap-4 border border-blue-400 rounded-2xl w-1/3">
                            <Typography variant="lead" className="-mb-3" color="light-blue">Taille</Typography>
                            <Input
                                variant="outlined"
                                size="md"
                                placeholder="Taille du Pokemon"
                                label="Taille du Pokemon"
                                color="light-blue"
                                name="pokemon_width"
                                value={inputs.pokemon_width || ""}
                                onChange={(e) => handleChange(e)}
                            />
                            <Typography variant="lead" className="-mb-3" color="light-blue">Catégorie</Typography>
                            <Input
                                variant="outlined"
                                size="md"
                                placeholder="Catégorie du Pokémon"
                                label="Catégorie du Pokemon"
                                color="light-blue"
                                name="pokemon_category"
                                value={inputs.pokemon_category || ""}
                                onChange={(e) => handleChange(e)}
                            />
                            <Typography variant="lead" className="-mb-3" color="light-blue">Poids</Typography>
                            <Input
                                variant="outlined"
                                size="md"
                                placeholder="Poids du Pokemon"
                                label="Poids du Pokemon"
                                color="light-blue"
                                name="pokemon_weigth"
                                value={inputs.pokemon_weigth || ""}
                                onChange={(e) => handleChange(e)}
                            />
                            <Typography variant="lead" className="-mb-3" color="light-blue">Talent</Typography>
                            <Input
                                variant="outlined"
                                size="md"
                                placeholder="Talent du Pokémon"
                                label="Talent du Pokemon"
                                color="light-blue"
                                name="pokemon_talent"
                                value={inputs.pokemon_talent || ""}
                                onChange={(e) => handleChange(e)}
                            />
                            <Typography variant="lead" className="-mb-3" color="light-blue">Sexe</Typography>
                            <div className="flex">
                                <Checkbox label="Mâle" color="light-blue" name="pokemon_male" onChange={handleCheckboxChange}/>
                                <Checkbox label="Femelle" color="light-blue" name="pokemon_female" onChange={handleCheckboxChange}/>
                            </div>
                        </div>

                        <div className="p-4 flex flex-col gap-4 border border-blue-gray-400 rounded-2xl w-1/3">
                            <Typography variant="lead" className="-mb-3" color="blue">Texte version
                                bleue</Typography>
                            <Textarea
                                variant="outlined"
                                size="md"
                                color="blue"
                                label="Texte version bleue"
                                name="pokemon_blue_text"
                                value={inputs.pokemon_blue_text || ""}
                                onChange={(e) => handleChange(e)}
                            />
                            <Typography variant="lead" className="-mb-3" color="red">Texte version
                                rouge</Typography>
                            <Textarea
                                variant="outlined"
                                size="md"
                                color="red"
                                label="Texte version rouge"
                                name="pokemon_red_text"
                                value={inputs.pokemon_red_text || ""}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>

                        <div className="p-4 flex flex-col gap-4 border border-orange-400 rounded-2xl w-1/3">
                            <Typography variant="lead" className="-mb-3" color="orange">PV</Typography>
                            <Input
                                variant="outlined"
                                size="md"
                                placeholder="Points de vie du Pokémon"
                                label="Points de vie du Pokemon"
                                color="orange"
                                type="number"
                                name="pokemon_pv"
                                value={inputs.pokemon_pv || ""}
                                onChange={(e) => handleChange(e)}
                            />
                            <Typography variant="lead" className="-mb-3" color="orange">Attaque</Typography>
                            <Input
                                variant="outlined"
                                size="md"
                                placeholder="Attaque du Pokémon"
                                label="Attaque du Pokemon"
                                color="orange"
                                type="number"
                                name="pokemon_attack"
                                value={inputs.pokemon_attack || ""}
                                onChange={(e) => handleChange(e)}
                            />
                            <Typography variant="lead" className="-mb-3" color="orange">Défense</Typography>
                            <Input
                                variant="outlined"
                                size="md"
                                placeholder="Défense du Pokémon"
                                label="Défense du Pokemon"
                                color="orange"
                                type="number"
                                name="pokemon_defense"
                                value={inputs.pokemon_defense || ""}
                                onChange={(e) => handleChange(e)}
                            />
                            <Typography variant="lead" className="-mb-3" color="orange">Attaque
                                Spéciale</Typography>
                            <Input
                                variant="outlined"
                                size="md"
                                placeholder="Attaque Spéciale du Pokémon"
                                label="Attaque Spéciale du Pokemon"
                                color="orange"
                                type="number"
                                name="pokemon_special_attack"
                                value={inputs.pokemon_special_attack || ""}
                                onChange={(e) => handleChange(e)}

                            />
                            <Typography variant="lead" className="-mb-3" color="orange">Défense
                                Spéciale</Typography>
                            <Input
                                variant="outlined"
                                size="md"
                                placeholder="Défense Spéciale du Pokémon"
                                label="Défense Spéciale du Pokemon"
                                color="orange"
                                type="number"
                                name="pokemon_special_defense"
                                value={inputs.pokemon_special_defense || ""}
                                onChange={(e) => handleChange(e)}
                            />
                            <Typography variant="lead" className="-mb-3" color="orange">Vitesse</Typography>
                            <Input
                                variant="outlined"
                                size="md"
                                placeholder="Vitesse du Pokémon"
                                label="Vitesse du Pokemon"
                                color="orange"
                                type="number"
                                name="pokemon_speed"
                                value={inputs.pokemon_speed || ""}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="p-4 flex flex-col flex-wrap gap-4 border border-green-400 rounded-2xl">
                            <Typography variant="lead" className="-mb-3" color="orange">Type(s) et
                                Faiblesse(s)</Typography>
                            <div className="flex flex-wrap gap-4 items-center justify-center">
                                <div className="flex">
                                    <Chip value="Acier" size="sm" className="text-blue-gray-900 w-24 text-center"
                                          style={{background: "-webkit-linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%)"}}/>
                                    <Checkbox label="T" name="t_acier" onChange={handleCheckboxChange}/>
                                    <Checkbox label="F" name="f_acier" onChange={handleCheckboxChange}/>
                                </div>
                                <div className="flex">
                                    <Chip value="Combat" size="sm" className="text-white w-24 text-center"
                                          style={{background: "-webkit-linear-gradient(180deg, #d56723 50%, #d56723 50%)"}}/>
                                    <Checkbox label="T" name="t_combat" onChange={handleCheckboxChange}/>
                                    <Checkbox label="F" name="f_combat" onChange={handleCheckboxChange}/>
                                </div>
                                <div className="flex">
                                    <Chip value="Dragon" size="sm" className="text-white w-24 text-center"
                                          style={{background: "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)"}}/>
                                    <Checkbox label="T" name="t_dragon" onChange={handleCheckboxChange}/>
                                    <Checkbox label="F" name="f_dragon" onChange={handleCheckboxChange}/>
                                </div>
                                <div className="flex">
                                    <Chip value="Eau" className="text-white w-24 text-center"
                                          style={{backgroundColor: "#4592c4"}}/>
                                    <Checkbox label="T" name="t_eau" onChange={handleCheckboxChange}/>
                                    <Checkbox label="F" name="f_eau" onChange={handleCheckboxChange}/>
                                </div>
                                <div className="flex">
                                    <Chip value="Électrik" className="text-blue-gray-900 w-24 text-center"
                                          style={{backgroundColor: "#eed535"}}/>
                                    <Checkbox label="T" name="t_electrik" onChange={handleCheckboxChange}/>
                                    <Checkbox label="F" name="f_electrik" onChange={handleCheckboxChange}/>
                                </div>
                                <div className="flex">
                                    <Chip value="Fée" className="text-blue-gray-900 w-24 text-center"
                                          style={{backgroundColor: "#fdb9e9"}}/>
                                    <Checkbox label="T" name="t_fee" onChange={handleCheckboxChange}/>
                                    <Checkbox label="F" name="f_fee" onChange={handleCheckboxChange}/>
                                </div>
                                <div className="flex">
                                    <Chip value="Feu" className="text-white w-24 text-center"
                                          style={{backgroundColor: "#fd7d24"}}/>
                                    <Checkbox label="T" name="t_feu" onChange={handleCheckboxChange}/>
                                    <Checkbox label="F" name="f_feu" onChange={handleCheckboxChange}/>
                                </div>
                                <div className="flex">
                                    <Chip value="Glace" className="text-blue-gray-900 w-24 text-center"
                                          style={{backgroundColor: "#51c4e7"}}/>
                                    <Checkbox label="T" name="t_glace" onChange={handleCheckboxChange}/>
                                    <Checkbox label="F" name="f_glace" onChange={handleCheckboxChange}/>
                                </div>
                                <div className="flex">
                                    <Chip value="Insecte" className="text-white w-24 text-center"
                                          style={{backgroundColor: "#729f3f"}}/>
                                    <Checkbox label="T" name="t_insecte" onChange={handleCheckboxChange}/>
                                    <Checkbox label="F" name="f_insecte" onChange={handleCheckboxChange}/>
                                </div>
                                <div className="flex">
                                    <Chip value="Normal" className="text-blue-gray-900 w-24 text-center"
                                          style={{backgroundColor: "#a4acaf"}}/>
                                    <Checkbox label="T" name="t_normal" onChange={handleCheckboxChange}/>
                                    <Checkbox label="F" name="f_normal" onChange={handleCheckboxChange}/>
                                </div>
                                <div className="flex">
                                    <Chip value="Plante" className="text-blue-gray-900 w-24 text-center"
                                          style={{backgroundColor: "#9bcc50"}}/>
                                    <Checkbox label="T" name="t_plante" onChange={handleCheckboxChange}/>
                                    <Checkbox label="F" name="f_plante" onChange={handleCheckboxChange}/>
                                </div>
                                <div className="flex">
                                    <Chip value="Poison" className="text-white w-24 text-center"
                                          style={{backgroundColor: "#b97fc9"}}/>
                                    <Checkbox label="T" name="t_combat" onChange={handleCheckboxChange}/>
                                    <Checkbox label="F" name="t_combat" onChange={handleCheckboxChange}/>
                                </div>
                                <div className="flex">
                                    <Chip value="Psy" className="text-white w-24 text-center"
                                          style={{backgroundColor: "#f366b9"}}/>
                                    <Checkbox label="T" name="t_psy" onChange={handleCheckboxChange}/>
                                    <Checkbox label="F" name="f_psy" onChange={handleCheckboxChange}/>
                                </div>
                                <div className="flex">
                                    <Chip value="Roche" className="text-white w-24 text-center"
                                          style={{backgroundColor: "#a38c21"}}/>
                                    <Checkbox label="T" name="t_roche" onChange={handleCheckboxChange}/>
                                    <Checkbox label="F" name="f_roche" onChange={handleCheckboxChange}/>
                                </div>
                                <div className="flex">
                                    <Chip value="Sol" className="text-blue-gray-900 w-24 text-center"
                                          style={{background: "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)"}}/>
                                    <Checkbox label="T" name="t_sol" onChange={handleCheckboxChange}/>
                                    <Checkbox label="F" name="f_sol" onChange={handleCheckboxChange}/>
                                </div>
                                <div className="flex">
                                    <Chip value="Spectre" className="text-white w-24 text-center"
                                          style={{backgroundColor: "#7b62a3"}}/>
                                    <Checkbox label="T" name="t_spectre" onChange={handleCheckboxChange}/>
                                    <Checkbox label="F" name="f_spectre" onChange={handleCheckboxChange}/>
                                </div>
                                <div className="flex">
                                    <Chip value="Ténèbre" className="text-white w-24 text-center"
                                          style={{backgroundColor: "#707070"}}/>
                                    <Checkbox label="T" name="t_tenebre" onChange={handleCheckboxChange}/>
                                    <Checkbox label="F" name="f_tenebre" onChange={handleCheckboxChange}/>
                                </div>
                                <div className="flex">
                                    <Chip value="Vol" className="text-blue-gray-900 w-24 text-center"
                                          style={{background: "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)"}}/>
                                    <Checkbox label="T" name="t_vol" onChange={handleCheckboxChange}/>
                                    <Checkbox label="F" name="f_vol" onChange={handleCheckboxChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 flex flex-wrap gap-4 border border-blue-gray-400 rounded-2xl">
                            <Typography variant="lead" className="-mb-3" color="blue-gray">Évolution 1</Typography>
                            <Input
                                variant="outlined"
                                size="md"
                                placeholder="Numéro du Pokemon"
                                label="Numéro du Pokemon"
                                color="blue-gray"
                                name="pokemon_evo_1_num"
                                value={inputs.pokemon_evo_1_num || ""}
                                onChange={(e) => handleChange(e)}
                            />
                            <Input
                                variant="outlined"
                                size="md"
                                placeholder="Nom du Pokemon"
                                label="Nom du Pokemon"
                                color="blue-gray"
                                name="pokemon_evo_1_name"
                                value={inputs.pokemon_evo_1_name || ""}
                                onChange={(e) => handleChange(e)}
                            />
                            <Typography variant="lead" className="-mb-3" color="blue-gray">Évolution 2</Typography>
                            <Input
                                variant="outlined"
                                size="md"
                                placeholder="Numéro du Pokemon"
                                label="Numéro du Pokemon"
                                color="blue-gray"
                                name="pokemon_evo_2_num"
                                value={inputs.pokemon_evo_2_num || ""}
                                onChange={(e) => handleChange(e)}
                            />
                            <Input
                                variant="outlined"
                                size="md"
                                placeholder="Nom du Pokemon"
                                label="Nom du Pokemon"
                                color="blue-gray"
                                name="pokemon_evo_2_name"
                                value={inputs.pokemon_evo_2_name || ""}
                                onChange={(e) => handleChange(e)}
                            />
                            <Typography variant="lead" className="-mb-3" color="blue-gray">Évolution 3</Typography>
                            <Input
                                variant="outlined"
                                size="md"
                                placeholder="Numéro du Pokemon"
                                label="Numéro du Pokemon"
                                color="blue-gray"
                                name="pokemon_evo_3_num"
                                value={inputs.pokemon_evo_3_num || ""}
                                onChange={(e) => handleChange(e)}
                            />
                            <Input
                                variant="outlined"
                                size="md"
                                placeholder="Nom du Pokemon"
                                label="Nom du Pokemon"
                                color="blue-gray"
                                name="pokemon_evo_3_name"
                                value={inputs.pokemon_evo_3_name || ""}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <Button color="green" onClick={(e) => handleSubmit(e)}>Ajouter le Pokémon</Button>
                    </div>
                </form>
            </Card>

        </section>
    );
};

export default AddPoke;