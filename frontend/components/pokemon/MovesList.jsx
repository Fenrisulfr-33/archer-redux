import { colors } from "../variables/typeColors";
import MoveModal from "./MoveModal";
import TableLayout from "../tableLayout/TableLayout";

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
    <TableLayout
      thead={moveHeader.map((header, index) => (
        <th key={index} className={styles.th}>
          {header}
        </th>
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
  const typeOne = colors[type?.toLowerCase()];

  return (
    <tr className={styles.tr}>
      {levelUp && <td className={styles.th}>{lvl}</td>}
      {hmTrue && <td className={styles.th}>{hm}</td>}
      {tmTrue && <td className={styles.th}>{tm}</td>}
      {trTrue && <td className={styles.th}>{tr}</td>}
      <td className="py-2 px-1 text-center">
        <MoveModal move={move} />
      </td>
      <td className={`${styles.stat} ${typeOne} bg-opacity-60`}>{type}</td>
      <td className={styles.stat}>{category}</td>
      <td className={styles.stat}>{pp}</td>
      <td className={styles.stat}>{power}</td>
      <td className={styles.stat}>{accuracy}</td>
      {transfer && <td className={styles.th}>{method}</td>}
    </tr>
  );
}

const styles = {
  tr: "border-b border-stone-400 hover:bg-purple-300 hover:text-gray-300 hover:font-bold",
  th: "py-3 px-1 text-center",
};
