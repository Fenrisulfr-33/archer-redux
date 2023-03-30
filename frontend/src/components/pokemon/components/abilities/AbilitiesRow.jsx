import Link from "next/link";

export default function AbilitiesRow({ ability: { _id, name, effect } }) {
  return (
    <tr className="text-center hover:bg-purple-200 hover:text-gray-900 hover:font-bold">
      <td>{_id}</td>
      <Link href={`/pokemon/abilities/${_id}`} passhref>
        {name.english}
      </Link>
      <td>{effect?.shortEffect}</td>
    </tr>
  );
}
