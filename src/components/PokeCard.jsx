import {Card, CardBody, CardFooter, CardHeader, Chip, Typography} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";


const PokeCard = () => {

    const navigate = useNavigate()

    return (
        <Card className="w-64 h-80 transition ease-in hover:transform hover:-translate-y-4 cursor-pointer" onClick={() => navigate(`/details/Bulbizarre`)}>
            <CardHeader floated={true} className="h-48 w-48 mx-auto bg-gray-200">
                    <img src="/pokemon/bulbizarre.png" alt="Bulbizarre"/>
            </CardHeader>
            <CardBody className="text-center">
                <Typography as="caption" variant="small" className="-mt-2 font-bold">
                    N°0001
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    Bulbizarre
                </Typography>
                <CardFooter className="flex justify-center gap-2 py-2">
                    <Chip value="Plante" size="sm" className="text-blue-gray-900" style={{ backgroundColor: "#9bcc50" }} />
                    <Chip value="Poison" className="text-white" style={{ backgroundColor: "#b97fc9" }} />
                </CardFooter>
            </CardBody>
        </Card>
    );
};

export default PokeCard;