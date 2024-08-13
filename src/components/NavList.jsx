import React from 'react';
import {Typography} from "@material-tailwind/react";
import {useAuthStore} from "../stores/authStore.js";

const NavList = () => {
    const userInfo = useAuthStore((state) => state.userInfo)
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="a"
                href="/"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium cursor-pointer"
            >
                Home
            </Typography>
            <Typography
                as="a"
                href="/pokedex"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium cursor-pointer"
            >
                Les Pokémons
            </Typography>
            {userInfo && (
                <Typography
                    as="a"
                    href="/admin"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium cursor-pointer"
                >
                    Administration
                </Typography>
            )}

        </ul>
    );
};

export default NavList;