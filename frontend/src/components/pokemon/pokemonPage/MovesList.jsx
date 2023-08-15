import { colors } from "../variables/typeColors";
import MoveModal from "./MoveModal";
import PokemonTableLayout from "@/components/pokemon/PokemonTableLayout";

export default function MovesList({
  moves,
  levelUp = false,
  hmTrue = false,
  tmTrue = false,
  trTrue = false,
  transfer = false,
}) {
  const moveHeader = ["Name", "Type", "Cat.", "PP", "Pwr.", "Acc."];
  levelUp ? moveHeader.unshift("Level") : null;
  hmTrue ? moveHeader.unshift("HM") : null;
  tmTrue ? moveHeader.unshift("TM") : null;
  trTrue ? moveHeader.unshift("TR") : null;
  transfer ? moveHeader.push("Method") : null;

  return (
    <PokemonTableLayout
      thead={moveHeader.map((header, index) => (
        <th key={index}>{header}</th>
      ))}
      tbody={moves.map((move) => (
        <MoveInd
          key={move._id}
          move={move}
          levelUp={levelUp}
          hmTrue={hmTrue}
          tmTrue={tmTrue}
          trTrue={trTrue}
          transfer={transfer}
        />
      ))}
    />
  );
}

function MoveInd({ move, levelUp, hmTrue, tmTrue, trTrue, transfer }) {
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
        <MoveModal move={move} />
      </td>
      <td>
        <div className={`rounded my-1 ${colors[type.toLowerCase()]}`}>
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
