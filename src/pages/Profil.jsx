import {Button, Card, CardBody, Collapse, IconButton, Input, Typography} from "@material-tailwind/react";
import {FaRegEdit} from "react-icons/fa";
import {useState} from "react";
import {useAuthStore} from "../stores/authStore.js";

const Profil = () => {

    const [openUsername, setOpenUsername] = useState(false)
    const [openEmail, setOpenEmail] = useState(false)
    const [openPassword, setOpenPassword] = useState(false)
    const userInfo = useAuthStore((state) => state.userInfo)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const toggleOpenUsername = () => setOpenUsername((openUsername) => !openUsername)
    const toggleOpenEmail = () => setOpenEmail((openEmail) => !openEmail)
    const toggleOpenPassword = () => setOpenPassword((openPassword) => !openPassword)

    const handleSubmit = (e, input) => {
        e.preventDefault()
        console.log(input)
        setUsername("")
        setEmail("")
        setOldPassword("")
        setNewPassword("")
    }

    return (
        <section className="m-10">
            <div
                className="p-10 rounded-l-xl border border-purple-100 rounded-xl bg-gradient-to-b from-blue-gray-700 to-black">
                <div className="flex justify-center items-center gap-6">
                    <Typography
                        variant="h1"
                        color="white"
                    >
                        Mon profil
                    </Typography>
                </div>
                <div className="my-10 flex flex-col items-center">
                    <div className="flex items-center gap-6 border p-2">
                        <div className="flex flex-wrap gap-6 justify-between items-center w-96">
                            <Typography color="white">Pseudo :</Typography>
                            <Typography color="white">{userInfo.user.first_name}</Typography>
                            <IconButton variant="text" color="yellow" onClick={toggleOpenUsername}>
                                <FaRegEdit size={24}/>
                            </IconButton>
                            <Collapse open={openUsername}>
                                <Card className="my-4 mx-auto">
                                    <CardBody className=" flex gap-4">
                                        <Input
                                            type="text"
                                            variant="outlined"
                                            label="Pseudo"
                                            name="pseudo"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                        <Button color="green" onClick={(e) => handleSubmit(e, {username : username})}>Modifier</Button>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 border p-2">
                        <div className="flex flex-wrap gap-6 justify-between items-center w-96">
                            <Typography color="white">Email :</Typography>
                            <Typography color="white">{userInfo.user.email}</Typography>
                            <IconButton variant="text" color="yellow" onClick={toggleOpenEmail}>
                                <FaRegEdit size={24}/>
                            </IconButton>
                            <Collapse open={openEmail}>
                                <Card className="my-4 mx-auto">
                                    <CardBody className=" flex gap-4">
                                        <Input
                                            type="email"
                                            variant="outlined"
                                            label="Email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <Button color="green"
                                                onClick={(e) => handleSubmit(e, {email: email})}>Modifier</Button>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 border p-2">
                        <div className="flex flex-wrap gap-6 justify-between items-center w-96">
                            <Typography color="white">Password :</Typography>
                            <Typography color="white">*******</Typography>
                            <IconButton variant="text" color="yellow" onClick={toggleOpenPassword}>
                                <FaRegEdit size={24}/>
                            </IconButton>
                            <Collapse open={openPassword}>
                                <Card className="my-4 mx-auto">
                                    <CardBody className=" flex flex-col gap-4">
                                        <Input
                                            type="password"
                                            variant="outlined"
                                            label="Odl password"
                                            name="old_password"
                                            value={oldPassword}
                                            onChange={(e) => setOldPassword(e.target.value)}
                                        />
                                        <Input
                                            type="password"
                                            variant="outlined"
                                            label="New password"
                                            name="new_password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                        />
                                        <Button color="green"
                                                onClick={(e) => handleSubmit(e, {oldPassword: oldPassword, newPassword: newPassword})}>Modifier</Button>
                                    </CardBody>
                                </Card>
                            </Collapse>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profil;