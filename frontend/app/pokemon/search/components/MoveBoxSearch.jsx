"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { movesDropDownScarletViolet } from "@/components/variables/movesDropDownScarletViolet";
import MoveDropDown from "./MoveDropDown";
import GameDropDown from "@/components/pokemon/GameDropDown";
import { pokemonGameDropDown } from "@/constants/pokemonGameDropDown";
import { createSearchQuery } from "@/helperFunctions/createSearchQuery";

export default function MoveBoxSearch() {
    const router = useRouter();
    const [moveOne, setMoveOne] = useState("");
    const [moveTwo, setMoveTwo] = useState("");
    const [moveThree, setMoveThree] = useState("");
    const [moveFour, setMoveFour] = useState("");
    const [selectedGame, setSelectedGame] = useState(() => gameDropDownTest[0]);
    const onResetHandler = () => {
        setMoveOne("");
        setMoveTwo("");
        setMoveThree("");
        setMoveFour("");
        router.replace("/pokemon/search");
    };
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const params = {
            game: selectedGame.key,
            moveOne,
            moveTwo,
            moveThree,
            moveFour,
        };
        router.replace(`/pokemon/search${createSearchQuery(params)}`);
    };

    return (
        <div className="relative border-2">
            <GameDropDown
                list={gameDropDownTest}
                selected={selectedGame}
                setSelected={setSelectedGame}
                placeholder={"Select a Game"}
            />
            <MoveDropDown
                selected={moveOne}
                setSelected={setMoveOne}
                placeholder={"Select a Move"}
                list={movesDropDownScarletViolet}
            />
            <MoveDropDown
                selected={moveTwo}
                setSelected={setMoveTwo}
                placeholder={"Select a Move"}
                list={movesDropDownScarletViolet}
            />
            <MoveDropDown
                selected={moveThree}
                setSelected={setMoveThree}
                placeholder={"Select a Move"}
                list={movesDropDownScarletViolet}
            />
            <MoveDropDown
                selected={moveFour}
                setSelected={setMoveFour}
                placeholder={"Select a Move"}
                list={movesDropDownScarletViolet}
            />
            <div className="row-flex">
                <button
                    onClick={onResetHandler}
                    className="w-1/2 bg-purple-100 rounded-lg px-4 py-2 m-1 text-gray-900 font-bold"
                >
                    Reset
                </button>
                <button
                    onClick={onSubmitHandler}
                    className="w-1/2 bg-purple-100 rounded-lg px-4 py-2 m-1 text-gray-900 font-bold"
                >
                    Search
                </button>
            </div>
        </div>
    );
}

const gameDropDownTest = [
    {
        key: "scarlet-violet",
        title: "Scarlet & Violet",
    },
    {
        key: "legends-arceus",
        title: "Legends Arceus",
    },
    {
        key: "brilliant-diamond-shining-pearl",
        title: "Brilliant Diamond & Shining Pearl",
    },
    {
        key: "sword-shield",
        title: "Sword & Shield",
    },
    {
        key: "ultra-sun-ultra-moon",
        title: "Ultra Sun & Ultra Moon",
    },
    {
        key: "sun-moon",
        title: "Sun & Moon",
    },
    {
        key: "omega-ruby-alpha-sapphire",
        title: "Omega Ruby & Alpha Sapphire",
    },
    {
        key: "x-y",
        title: "X & Y",
    },
    {
        key: "black-2-white-2",
        title: "Black 2 & White 2",
    },
    {
        key: "black-white",
        title: "Black & White",
    },
    {
        key: "platinum",
        title: "Platinum",
    },
    {
        key: "diamond-pearl",
        title: "Diamond & Pearl",
    },
    {
        key: "emerald",
        title: "Emerald",
    },
    {
        key: "ruby-sapphire",
        title: "Ruby & Sapphire",
    },
    {
        key: "crystal",
        title: "Crystal",
    },
    {
        key: "gold-silver",
        title: "Gold & Silver",
    },
    {
        key: "yellow",
        title: "Yellow",
    },
    {
        key: "red-blue",
        title: "Red & Blue",
    },
];
