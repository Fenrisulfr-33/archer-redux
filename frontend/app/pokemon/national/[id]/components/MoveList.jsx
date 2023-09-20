import MoveListRow from "./MoveListRow";
import PokemonTableLayout from "@/components/pokemon/PokemonTableLayout";

export default function MoveList({
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
        <MoveListRow
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