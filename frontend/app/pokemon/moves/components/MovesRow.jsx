import { typeColors } from "../../../components/variables/typeColors";
import Link from "next/link";

export default function MovesRow({
  move: { _id, name, type, category, pp, power, accuracy },
}) {
  return (
    <tr className="table-row">
      <td>{_id}</td>
      <td>
        <Link href={`/pokemon/moves/${_id}`} className="text-purple-0 font-bold hover:text-purple-50">
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
