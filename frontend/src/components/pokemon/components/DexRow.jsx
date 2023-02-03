import Image from "next/image";
import Link from "next/link";
import { colors } from "../variables/typeColors";

export const DexRow = ({pokemon: { _id, baseStats: { hp, atk, def, spatk, spdef, spd },name,type: {one,two}, abilities,}, dexNumber}) => {
    const stats = [hp, atk, def, spatk, spdef, spd],
    styles = {
        stat: "py-1 px-1 border-l border-gray-400 text-center text-gray-800 whitespace-nowrap bg-opacity-75",
        type: "col-span-1 my-1 rounded-md px-2 space-x-1 font-bold bg-opacity-75",      
    }

    return (
      <tr className="text-center hover:bg-purple-200 hover:text-gray-900 hover:font-bold">
        <td>{dexNumber}</td>
        <td>
          <Link href={`/pokemon/national/${_id}/sword-shield`} passhref>
            {name?.english}
          </Link>
        </td>
        <td>
          <Image
            src={`/sprites/${_id}.png`}
            alt={`${name?.english}`}
            height={40}
            width={40}
            layout="intrinsic"
            className="col-span-1"
          />
        </td>
        <td>
          <div className="font-bold flex flex-col">
            <div className={`${styles.type} ${colors[one.toLowerCase()]}`}>
              {one}
            </div>
            {two &&
              <div className={`${styles.type} ${colors[two.toLowerCase()]}`}>
                {two}
              </div>}
          </div>
        </td>
        <td>
          <div className="flex flex-col">
            <div className="">{abilities.one}</div>
            <div className="">{abilities.two}</div>
            <div className="italic">{abilities.hidden}</div>
          </div>
        </td>
        {stats.map((stat, index) => (
          <td key={index} className={styles.stat}>{stat}</td>
        ))}
      </tr>
    );
  };