import { IconButton, Typography} from "@material-tailwind/react";
import { TfiTrash } from "react-icons/tfi";
import { FaRegEye, FaRegEdit  } from "react-icons/fa";



const AdminListItem = ({pokemon}) => {

    const handleDelete = (id) => {
        console.log(id)
    }

    return (
        <div className="flex items-center gap-6 border p-2">
            <div className="flex gap-6">
                <Typography color="white">N°{pokemon.pokemon_num}</Typography>
                <Typography color="white">{pokemon.pokemon_name} :</Typography>
            </div>
            <div className="flex gap-6">
                <IconButton variant="text" color="blue">
                    <a href={`/details/${pokemon?.pokemon_name}`}><FaRegEye size={24}/></a>
                </IconButton>
                <IconButton variant="text" color="yellow">
                    <a href={`/edit/${pokemon?._id}`}><FaRegEdit size={24}/></a>
                </IconButton>
                <IconButton variant="text" color="red" onClick={() => handleDelete(pokemon._id)}>
                    <TfiTrash size={24}/>
                </IconButton>
            </div>
        </div>
    );
};

export default AdminListItem;