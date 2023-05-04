import Image from "next/image";
import Link from "next/link";
import { colors } from "../variables/typeColors";

export const DexRow = ({ pokemon, dexNumber, pushRoute}) => {
    const { _id,baseStats:{total,hp,atk,def,spatk,spdef,spd},name,type:{one,two},abilities} = pokemon;
    const stats = [total, hp, atk, def, spatk, spdef, spd],
    styles = {
        stat: "py-1 px-1 whitespace-nowrap bg-opacity-75",
        type: "col-span-1 my-1 rounded-md px-2 space-x-1 font-bold bg-opacity-75",      
    }

    return (
      <tr className="text-center hover:bg-purple-300 hover:text-gray-300 hover:font-bold">
        <td>{dexNumber ? dexNumber : '--'}</td>
        <td>
          <Link href={`/pokemon/national/${_id}/${pushRoute}`} passhref>
            {name?.english}
          </Link>
        </td>
        <td>
          <Image
            src={`/sprites/gen_9/${_id}.png`}
            alt={`${name?.english}`}
            height={40}
            width={40}
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
            <div className="">{abilities.one.name}</div>
            <div className="">{abilities?.two?.name}</div>
            <div className="italic">{abilities?.hidden?.name}</div>
          </div>
        </td>
        {stats.map((stat, index) => (
          <td key={index} className={styles.stat}>{stat}</td>
        ))}
      </tr>
    );
  };