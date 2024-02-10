import Image from "next/image";
import Link from "next/link";
import DataRow from "./DataRow";
import { typeColors } from "@/components/variables/typeColors";

export default function PokemonLinkCard({
    pokemon: { id, name, type, level },
}) {
    return (
        <Link href={`/pokemon/national/${id}`} passHref>
            <div className=" w-32 flex flex-col text-center border-2 border-purple-50 m-1 p-2 space-y-1 rounded col-span-1 text-white bg-gray-900 hover:shadow-selected">
                <div className="flex justify-center">
                    <Image
                        src={`/sprites/gen_9/${id}.png`}
                        alt={name}
                        height={60}
                        width={60}
                    />
                </div>
                <div>{id}</div>
                <div>{name}</div>
                <div
                    className={`px-2 py-1 rounded font-bold ${
                        typeColors[type.one.toLowerCase()]
                    }`}
                >
                    {type.one}
                </div>
                {type.two && (
                    <div
                        className={`px-2 py-1 rounded font-bold ${
                            typeColors[type.two.toLowerCase()]
                        }`}
                    >
                        {type.two}
                    </div>
                )}
            </div>
        </Link>
    );
}
