import {Card, CardBody, CardFooter, CardHeader, Chip, Typography} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";


const PokeCard = ({pokemon}) => {

    const navigate = useNavigate()

    return (
        <>
            {pokemon !== null && (
                <Card className="w-64 h-80 transition ease-in hover:transform hover:-translate-y-4 cursor-pointer" onClick={() => navigate(`/details/${pokemon?.pokemon_name}`)}>
                    <CardHeader floated={true} className="h-48 w-48 mx-auto bg-gray-200">
                        <img src={pokemon.pokemon_infos.pokemon_img} alt={`Image du Pokémon ${pokemon?.pokemon_name}`}/>
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography as="span" variant="small" className="-mt-2 font-bold">
                            N°{pokemon.pokemon_num}
                        </Typography>
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            {pokemon.pokemon_name}
                        </Typography>
                        <CardFooter className="flex justify-center gap-2 py-2">
                            {pokemon.pokemon_type.map((el, index) => (
                                <Chip key={index} value={el.name} size="sm" className="text-blue-gray-900" style={{ background: `${el.background}`}} />
                            ))}
                        </CardFooter>
                    </CardBody>
                </Card>
            )}
        </>


    );
};

export default PokeCard;