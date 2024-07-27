import React from 'react';
import {IconButton, Option, Select, Typography} from "@material-tailwind/react";
import {TbReload, TbSortAscendingNumbers, TbSortDescendingNumbers, TbZoomReset} from "react-icons/tb";

const SearchBar = () => {
    return (
        <>
            <div className="flex gap-6 items-center border-r border-r-white pr-4">
                <Typography
                    variant="lead"
                    color="white"
                >
                    5 Aléatoires
                </Typography>
                <IconButton color="purple">
                    <i><TbReload size={20}/></i>
                </IconButton>
            </div>
            <div className="flex gap-6 items-center border-r border-r-white pr-4">
                <Typography
                    variant="lead"
                    color="white"
                >
                    Ordre croissant
                </Typography>
                <IconButton color="light-green">
                    <i><TbSortAscendingNumbers size={24}/></i>
                </IconButton>
            </div>
            <div className="flex gap-6 items-center border-r border-r-white pr-4">
                <Typography
                    variant="lead"
                    color="white"
                >
                    Ordre décroissant
                </Typography>
                <IconButton color="yellow">
                    <i><TbSortDescendingNumbers size={24}/></i>
                </IconButton>
            </div>
            <div className="flex gap-6 items-center border-r border-r-white pr-4">
                <Typography
                    variant="lead"
                    color="white"
                >
                    Type
                </Typography>
                <Select color="light-blue" variant="static" className="text-white">
                    <Option>Acier</Option>
                    <Option>Combat</Option>
                    <Option>Dragon</Option>
                    <Option>Eau</Option>
                    <Option>Électrik</Option>
                    <Option>Fée</Option>
                    <Option>Feu</Option>
                    <Option>Glace</Option>
                    <Option>Insecte</Option>
                    <Option>Normal</Option>
                    <Option>Plante</Option>
                    <Option>Poison</Option>
                    <Option>Psy</Option>
                    <Option>Roche</Option>
                    <Option>Sol</Option>
                    <Option>Spectre</Option>
                    <Option>Ténèbre</Option>
                    <Option>Vol</Option>
                </Select>
            </div>
            <div className="flex gap-6 items-center border-r border-r-white pr-4">
                <Typography
                    variant="lead"
                    color="white"
                >
                    Réinitialiser
                </Typography>
                <IconButton color="yellow">
                    <i><TbZoomReset size={20}/></i>
                </IconButton>
            </div>
        </>
    );
};

export default SearchBar;