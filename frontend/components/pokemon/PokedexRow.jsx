import Image from "next/image";
import Link from "next/link";
import { typeColors } from "../variables/typeColors";

export default function PokedexRow({ pokemon, dexNo, national, pushRoute }) {
  const {
    _id,
    baseStats: { total, hp, atk, def, spatk, spdef, spd },
    name,
    type: { one, two },
    abilities,
  } = pokemon;
  const stats = [total, hp, atk, def, spatk, spdef, spd];

  return (
    <tr className="text-center odd:bg-gray-600 hover:bg-gray-900 hover:font-bold">
      {national ? <td>{_id}</td> : <><td>{dexNo}</td><td>{_id}</td></>}
      <td>
        <Link
          href={`/pokemon/national/${_id}/${pushRoute}`}
          passhref="true"
          className="hover:font-extrabold"
        >
          {name.english}
        </Link>
      </td>
      <td className="p-2">
        <div className="flex justify-center">
          <Image
            src={`/sprites/gen_9/${_id}.png`}
            alt={`${name.english}`}
            height={60}
            width={60}
          />
        </div>
      </td>
      <td>
        <div className="font-bold flex flex-col">
          <div
            className={`col-span-1 my-1 bg-opacity-100 rounded-md px-2 space-x-1 font-bold ${
                typeColors[one.toLowerCase()]
            }`}
          >
            {one}
          </div>
          {two && (
            <div
              className={`col-span-1 my-1 rounded-md px-2 space-x-1 font-bold ${
                typeColors[two.toLowerCase()]
              }`}
            >
              {two}
            </div>
          )}
        </div>
      </td>
      <td>
        <div className="flex flex-col">
          <div className="">{abilities?.one?.name}</div>
          <div className="">{abilities?.two?.name}</div>
          <div className="italic">{abilities?.hidden?.name}</div>
        </div>
      </td>
      {stats.map((stat, index) => (
        <td key={index} className="p-1 whitespace-nowrap">
          {stat}
        </td>
      ))}
    </tr>
  );
}
