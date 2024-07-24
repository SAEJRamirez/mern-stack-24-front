import {Button, Card, CardBody, CardFooter, CardHeader, Input, Typography} from "@material-tailwind/react";
import {useState} from "react";

const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username, email, password)
    }

    return (
        <section className="my-28 flex justify-center">
            <Card className="w-96">
                <CardHeader
                    color="gray"
                    className="grid h-36 place-items-start bg-[url('/bg-register.png')] bg-no-repeat bg-cover bg-bottom"
                >
                </CardHeader>
                <CardBody className="flex flex-col gap-8">
                    <Typography variant="h3" color="blue-gray">
                        S'inscrire
                    </Typography>
                    <Input
                        label="Pseudo"
                        size="lg"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        label="Email"
                        size="lg"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label="Mot de passe"
                        size="lg"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </CardBody>
                <CardFooter className="pt-0">
                    <Button variant="gradient" fullWidth color="yellow" onClick={handleSubmit}>
                        Devenir dresseur
                    </Button>
                    <Typography variant="small" className="mt-6 flex justify-center">
                        Déjà inscrit ?
                        <Typography
                            as="a"
                            href="/login"
                            variant="small"
                            color="blue-gray"
                            className="ml-1 font-bold"
                        >
                            Se connecter
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </section>
    );
};

export default Register;