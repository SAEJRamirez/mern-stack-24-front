import {Card, CardBody, CardFooter, CardHeader, Chip, Typography} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


const PokeCard = ({pokemon}) => {

    const navigate = useNavigate()
    const [types, setTypes] = useState([])

    useEffect(() => {
        if(pokemon) {
            pokemon.pokemon_type_weakness.map(el => {
                if(el.includes('t_')) {
                    if(!types.includes(el.substring(2))) {
                        setTypes([
                            ...types,
                            el.substring(2)
                        ])
                    }
                }
            })
        }
    }, [pokemon])

    console.log(types)

    return (
        <Card className="w-64 h-80 transition ease-in hover:transform hover:-translate-y-4 cursor-pointer" onClick={() => navigate(`/details/${pokemon.pokemon_infos.pokemon_name}`)}>
            <CardHeader floated={true} className="h-48 w-48 mx-auto bg-gray-200">
                    <img src={pokemon.pokemon_infos.pokemon_img} alt={`Image du Pokémon ${pokemon.pokemon_infos.pokemon_name}`}/>
            </CardHeader>
            <CardBody className="text-center">
                <Typography as="caption" variant="small" className="-mt-2 font-bold">
                    N°{pokemon.pokemon_infos.pokemon_num}
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {pokemon.pokemon_infos.pokemon_name}
                </Typography>
                <CardFooter className="flex justify-center gap-2 py-2">
                    {types.map((type, index) => (
                        <Chip key={index} value={type} size="sm" className="text-blue-gray-900" style={{ backgroundColor: "#9bcc50" }} />
                    ))}
                </CardFooter>
            </CardBody>
        </Card>
    );
};

export default PokeCard;