import {useParams} from "react-router-dom";
import {Button, Input, Typography} from "@material-tailwind/react";
import {useState} from "react";


const EditPoke = () => {
    const param = useParams().name
    const pokeName = param.charAt(0).toUpperCase() + param.slice(1)

    const [num, setNum] = useState("")
    const [name, setName] = useState("")
    const [img, setImg] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(num, name, img)
    }

    return (
        <section className="m-10">
            <div
                className="p-10 rounded-l-xl border border-purple-100 rounded-xl bg-gradient-to-b from-blue-gray-700 to-black">
                <div className="flex justify-center items-center gap-6 mb-8">
                    <Typography
                        variant="h2"
                        color="white"
                    >
                        Modifier {pokeName}
                    </Typography>
                </div>
                <div className="flex flex-col items-center gap-6 p-2">
                    <div className="flex items-center gap-6 w-full">
                        <Typography color="white">Numéro</Typography>
                        <Typography color="light-green">0001</Typography>
                        <Input
                            variant="outlined"
                            color="white"
                            placeholder="0001"
                            label="Numéro"
                            name="num"
                            type="text"
                            value={num}
                            onChange={(e) => setNum(e.target.value)}/>
                    </div>
                    <div className="flex items-center gap-6 w-full">
                        <Typography color="white">Nom</Typography>
                        <Typography color="light-green">Bulbizarre</Typography>
                        <Input
                            variant="outlined"
                            color="white"
                            placeholder="Bulbizarre"
                            label="Nom"
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-6 w-full">
                        <Typography color="white">Image</Typography>
                        <Typography color="light-green">/pokemon/bulbizarre.png</Typography>
                        <Input
                            variant="outlined"
                            color="white"
                            placeholder="Chemin de l'image"
                            label="Image"
                            name="img"
                            type="text"
                            value={img}
                            onChange={(e) => setImg(e.target.value)}
                        />
                    </div>
                </div>
                <div className="text-center my-10">
                    <Button color="yellow" onClick={handleSubmit}>Enregistrer</Button>
                </div>
            </div>
        </section>
    );
};

export default EditPoke;