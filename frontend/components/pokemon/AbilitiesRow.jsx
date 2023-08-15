import Link from "next/link";

export default function AbilitiesRow({ ability: { _id, name, effect } }) {
  return (
    <tr className="text-left odd:bg-gray-600 hover:bg-purple-50 hover:font-bold">
      <td className="p-2">{_id}</td>
      <td className={'font-bold'}>
        <Link href={`/pokemon/abilities/${_id}`} passhref className="text-purple-50 font-bold italic">
          {name.english}
        </Link>
      </td>
      <td>{effect?.shortEffect}</td>
    </tr>
  );
}
