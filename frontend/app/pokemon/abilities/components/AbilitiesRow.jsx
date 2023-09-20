import Link from "next/link";

export default function AbilitiesRow({ ability: { _id, name, effect } }) {
  return (
    <tr className="table-row">
      <td className="p-2">{_id}</td>
      <td className="p-2">
        <Link href={`/pokemon/abilities/${_id}`} className="text-purple-0 font-bold hover:text-purple-50">
          {name.english}
        </Link>
      </td>
      <td className="p-2">{effect?.shortEffect}</td>
    </tr>
  );
}
