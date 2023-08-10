import { colors } from "../variables/typeColors";
import Link from "next/link";

export default function MovesRow({
  move: { _id, name, type, category, pp, power, accuracy },
}) {
  const styles = {
    type: "col-span-1 my-1 rounded-md px-2 space-x-1 font-bold bg-opacity-75",
  };

  return (
    <tr className="text-center hover:bg-purple-200 hover:text-gray-900 hover:font-bold">
      <td>{_id}</td>
      <td>
        <Link href={`/pokemon/moves/${_id}`} passHref>
          {name.english}
        </Link>
      </td>
      <td className={`${styles.type} ${colors[type.toLowerCase()]}`}>{type}</td>
      <td>{category ? category : "-"}</td>
      <td>{pp ? pp : "-"}</td>
      <td>{power ? power : "-"}</td>
      <td>{accuracy ? accuracy : "-"}</td>
    </tr>
  );
}
