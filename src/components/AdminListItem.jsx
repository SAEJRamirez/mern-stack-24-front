import { IconButton, Typography} from "@material-tailwind/react";
import { TfiTrash } from "react-icons/tfi";
import { FaRegEye, FaRegEdit  } from "react-icons/fa";



const AdminListItem = () => {

    const handleDelete = (name) => {
        console.log(name)
    }

    return (
        <div className="flex items-center gap-6 border p-2">
            <div className="flex gap-6">
                <Typography color="white">0001</Typography>
                <Typography color="white">Bulbizarre :</Typography>
            </div>
            <div className="flex gap-6">
                <IconButton variant="text" color="blue">
                    <a href="/details/bulbizarre"><FaRegEye size={24}/></a>
                </IconButton>
                <IconButton variant="text" color="yellow">
                    <a href="/edit/bulbizarre"><FaRegEdit size={24}/></a>
                </IconButton>
                <IconButton variant="text" color="red" onClick={() => handleDelete("bulbizarre")}>
                    <TfiTrash size={24}/>
                </IconButton>
            </div>
        </div>
    );
};

export default AdminListItem;