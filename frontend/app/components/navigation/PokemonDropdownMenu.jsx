"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@nextui-org/react";
import { IoMenu, IoCloseCircleSharp } from "react-icons/io5";
import { menus } from "@/app/_constants/menus";

export default function PokemonDropdownMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className="items-center justify-end p-5">
            <button className="relative flex items-center justify-center h-12 w-12 m-0 text-purple-200 bg-gray-800 rounded-3xl transition-all duration-200 ease-linear cursor-pointer group hover:bg-purple-600 hover:text-white hover:rounded-2xl"
            onClick={() => setOpen(!open)}>
                {open ? <IoCloseCircleSharp size='28' /> : <IoMenu size='28' />}
            </button>
            <div
                id="dropdownDots"
                className={`z-10 ${open ? "" : "hidden"}  rounded-lg`}
            >
                <ul
                    className="fixed top-20 right-0 w-full phone:w-1/2 h-1/2 overflow-y-scroll bg-gray-900 border-4 rounded border-purple-100 py-2 text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconButton"
                >
                    <div class="p-3">
                        <label for="input-group-search" class="sr-only">
                            Search
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <Input
                                type="text"
                                id="input-group-search"
                                class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search user"
                            />
                        </div>
                    </div>
                    {menus.map((menuItem) => (
                        <div className="border-b border-purple-100 m-2 pb-2">
                            <div className="bg-gray-800 text-gray-100 mb-2 rounded py-1 px-2">
                                {menuItem.title}
                            </div>
                            <div className="col-flex space-y-2">
                                {menuItem.list.map((listItem) => (
                                    <Link href={listItem.route} scroll={false} passHref>
                                        <button className="w-full text-left bg-purple-500 text-gray-100 py-0.5 px-2 rounded hover:bg-purple-100">
                                            {listItem.title}
                                        </button>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}
