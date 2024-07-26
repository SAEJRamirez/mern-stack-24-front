import {Button, Typography} from "@material-tailwind/react";

const Redirect = () => {
    return (
        <section className="m-10 h-[600px]">
            <div
                className="pl-20 rounded-l-xl border border-purple-100 bg-[url('/404.jpeg')] bg-no-repeat bg-cover bg-right h-full flex flex-col justify-center">
                <Typography variant="h1" color="white">
                    Poké - 404
                </Typography>
                <Typography variant="h2" color="yellow">
                    Pika Pika...
                </Typography>
                <Typography
                    className="mt-2 mb-6 !text-base text-gray-200"
                >
                    Il semblerait que vous soyez perdu...
                </Typography>
                <Button variant="filled" color="yellow" className="w-64">
                    <a href="/">Retourner à l'accueil</a>
                </Button>
            </div>
        </section>
    );
};

export default Redirect;