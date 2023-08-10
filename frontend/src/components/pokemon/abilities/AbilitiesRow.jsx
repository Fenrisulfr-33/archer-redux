import Link from "next/link";

export default function AbilitiesRow({ ability: { _id, name, effect } }) {
  return (
    <tr className="text-center border border-gray-600 hover:bg-purple-300 hover:text-gray-300 hover:font-bold">
      <td className={'border border-gray-600 items-center'}>{_id}</td>
      <td className={'font-bold'}>
        <Link href={`/pokemon/abilities/${_id}`} passhref>
          {name.english}
        </Link>
      </td>
      <td className={'border border-gray-600'}>{effect?.shortEffect}</td>
    </tr>
  );
}
