import PokemonMovesListModal from './PokemonMovesListModal';
import { typeColors } from '../variables/typeColors';

export default function PokemonMovesListRow({
  move,
  levelUp,
  hmTrue,
  tmTrue,
  trTrue,
  transfer,
}) {
  const {
    lvl,
    _id,
    hm,
    tm,
    tr,
    name,
    type,
    category,
    pp,
    power,
    accuracy,
    method,
  } = move;
  const route = `/pokemon/moves/${_id}`;

  return (
    <tr className=" odd:bg-gray-600 hover:bg-purple-50 hover:font-bold ">
      {levelUp && <td className="px-2">{lvl}</td>}
      {hmTrue && <td className="px-2">{hm}</td>}
      {tmTrue && <td className="px-2">{tm}</td>}
      {trTrue && <td className="px-2">{tr}</td>}
      <td className="p-2">
        <PokemonMovesListModal move={move} />
      </td>
      <td>
        <div className={`rounded my-1 ${typeColors[type.toLowerCase()]}`}>
          {type}
        </div>
      </td>
      <td>{category}</td>
      <td>{pp}</td>
      <td>{power}</td>
      <td>{accuracy}</td>
      {transfer && <td className="py-2">{method}</td>}
    </tr>
  );
}
