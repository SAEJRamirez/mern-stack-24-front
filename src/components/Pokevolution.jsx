import {Chip, Typography} from "@material-tailwind/react";
import { MdDoubleArrow } from "react-icons/md";


const Pokevolution = () => {
    return (
        <section className="bg-[url('/background-evolution.png')] bg-no-repeat bg-cover mx-20">
            <Typography className="py-6 text-left pl-6" variant="lead" color="white">Évolutions</Typography>
            <div className="flex justify-center items-center gap-4">
                <div className="flex flex-col items-center pb-10">
                    <img
                        className="h-40 w-40 rounded-full object-cover object-center border-4 border-white shadow-md shadow-gray-600 cursor-pointer"
                        src="/pokemon/bulbizarre.png" alt="Nom du pokemon"/>
                    <div className="flex items-center gap-4">
                        <Typography variant="h5" color="white">Bulbizarre</Typography>
                        <Typography variant="lead" className="text-gray-400">N°0001</Typography>
                    </div>
                    <div className="flex items-center gap-4 mt-6">
                        <Chip value="Plante" size="sm" className="text-blue-gray-900 w-24"
                              style={{backgroundColor: "#9bcc50"}}/>
                        <Chip value="Poison" className="text-white w-24" style={{backgroundColor: "#b97fc9"}}/>
                    </div>
                </div>
                <i><MdDoubleArrow size={80} color="white" className="mb-28"/></i>
                <div className="flex flex-col items-center pb-10">
                    <img
                        className="h-40 w-40 rounded-full object-cover object-center border-4 border-white shadow-md shadow-gray-600 cursor-pointer"
                        src="/pokemon/herbizarre.png" alt="Nom du pokemon"/>
                    <div className="flex items-center gap-4">
                        <Typography variant="h5" color="white">Herbizarre</Typography>
                        <Typography variant="lead" className="text-gray-400">N°0002</Typography>
                    </div>
                    <div className="flex items-center gap-4 mt-6">
                        <Chip value="Plante" size="sm" className="text-blue-gray-900 w-24"
                              style={{backgroundColor: "#9bcc50"}}/>
                        <Chip value="Poison" className="text-white w-24" style={{backgroundColor: "#b97fc9"}}/>
                    </div>
                </div>
                <i><MdDoubleArrow size={80} color="white" className="mb-28"/></i>
                <div className="flex flex-col items-center pb-10">
                    <img
                        className="h-40 w-40 rounded-full object-cover object-center border-4 border-white shadow-md shadow-gray-600 cursor-pointer"
                        src="/pokemon/florizarre.png" alt="Nom du pokemon"/>
                    <div className="flex items-center gap-4">
                        <Typography variant="h5" color="white">Florizarre</Typography>
                        <Typography variant="lead" className="text-gray-400">N°0003</Typography>
                    </div>
                    <div className="flex items-center gap-4 mt-6">
                        <Chip value="Plante" size="sm" className="text-blue-gray-900 w-24"
                              style={{backgroundColor: "#9bcc50"}}/>
                        <Chip value="Poison" className="text-white w-24" style={{backgroundColor: "#b97fc9"}}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pokevolution;