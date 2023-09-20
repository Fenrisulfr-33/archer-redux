import Image from "next/image";
import Link from "next/link";
import DataRow from "./DataRow";

export default function PokemonLinkCard({
    pokemon: { id, name, type, level },
}) {
    return (
        <Link href={`/pokemon/national/${id}`} passHref>
        <div className="flex flex-col border-2 border-purple-50 m-1 p-2 rounded col-span-1 text-white bg-gray-900 hover:shadow-selected">

                <div className="flex justify-center">
                    <Image
                        src={`/sprites/gen_9/${id}.png`}
                        alt={name}
                        height={60}
                        width={60}
                    />
                </div>
                <DataRow title={"Nat No."} info={id} />
                <DataRow title={"Name"} info={name} />
                <DataRow title={"Type 1"} type={type.one} />
                {type.two && <DataRow title={"Type 2"} type={type.two} />}
                {level && <DataRow title={"Level"} type={level} />}
         
        </div>
        </Link>
    );
}
