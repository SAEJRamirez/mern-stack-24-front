import {useEffect, useState} from 'react';
import {Button, Collapse, IconButton, Navbar, Typography} from "@material-tailwind/react";
import NavList from "./NavList.jsx";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navigation = () => {

    const [openNav, setOpenNav] = useState(false)

    const handleWindowResize = () => {
        window.innerWidth >= 960 && setOpenNav(false)

        useEffect(() => {
            return () => {
                window.removeEventListener("resize", handleWindowResize)
            }
        }, [])
    }

    return (
        <Navbar className="mx-auto max-w-screen-xl px-6 py-3 sticky top-0 z-10">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="/"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5"
                >
                    Poké-Crazy
                </Typography>
                <div className="hidden lg:block">
                    <NavList/>
                </div>
                <div className="hidden gap-2 lg:flex">
                    <Button variant="text" size="sm" color="blue-gray">
                        <a href="/login">Se connecter</a>
                    </Button>
                    <Button variant="gradient" size="sm">
                        <a href="/register">S'inscrire</a>
                    </Button>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2}/>
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2}/>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList/>
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                    <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
                    Se connecter
                    </Button>
                    <Button variant="gradient" size="sm" fullWidth>
                        S'inscrire
                    </Button>
                </div>
            </Collapse>
        </Navbar>
    );
};

export default Navigation;