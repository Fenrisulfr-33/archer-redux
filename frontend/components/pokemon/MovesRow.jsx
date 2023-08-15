import { typeColors } from "../variables/typeColors";
import Link from "next/link";

export default function MovesRow({
  move: { _id, name, type, category, pp, power, accuracy },
}) {
  return (
    <tr className="text-center odd:bg-gray-600 hover:bg-purple-50 hover:font-bold">
      <td>{_id}</td>
      <td>
        <Link href={`/pokemon/moves/${_id}`} passHref>
          {name.english}
        </Link>
      </td>
      <td>
        <div
          className={`font-bold rounded m-2 ${typeColors[type.toLowerCase()]}`}
        >
          {type}
        </div>
      </td>
      <td>{category ? category : "-"}</td>
      <td>{pp ? pp : "-"}</td>
      <td>{power ? power : "-"}</td>
      <td>{accuracy ? accuracy : "-"}</td>
    </tr>
  );
}
