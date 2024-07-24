import {Button, Typography} from "@material-tailwind/react";
import AdminListItem from "../components/AdminListItem.jsx";

const Admin = () => {
    return (
        <section className="m-10">
            <div
                className="p-10 rounded-l-xl border border-purple-100 rounded-xl bg-gradient-to-b from-blue-gray-700 to-black">
                <div className="flex justify-center items-center gap-6">
                    <Typography
                        variant="h2"
                        color="white"
                    >
                        Administrez les tous !
                    </Typography>
                </div>
                <div className="text-center my-6">
                    <Button color="light-green"><a href="/add-pokemon">Ajouter un Pokemon</a></Button>
                </div>
                <div className="my-10 flex flex-col items-center">
                    <AdminListItem/>
                    <AdminListItem/>
                    <AdminListItem/>
                    <AdminListItem/>
                    <AdminListItem/>
                </div>
            </div>
        </section>
    );
};

export default Admin;