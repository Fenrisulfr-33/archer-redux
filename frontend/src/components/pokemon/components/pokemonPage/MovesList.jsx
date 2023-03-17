import { colors } from "../../variables/typeColors";
import MoveModal from "./MoveModal";
import TableLayout from "../tableLayout/tableLayout";

const styles = {
    stat: 'py-2 px-1 text-center',
    tr: 'border-b border-stone-400 hover:bg-purple-300 hover:text-gray-300 hover:font-bold',
    th: 'py-3 px-1 text-center'
}

function MoveInd({ move, lvl }){
    const { level, _id, name, type, category, pp, power, accuracy } = move;
    const route = `/pokemon/moves/${_id}`;
    const typeOne = colors[type?.toLowerCase()];
    
    return(
        <tr className={styles.tr}>
            {lvl && <th className={styles.th}>{level}</th>}
            <td className={`${styles.stat}`}><MoveModal move={move} /></td>
            <td className={`${styles.stat} ${typeOne} bg-opacity-60`}>{type}</td>
            <td className={styles.stat}>{category}</td>
            <td className={styles.stat}>{pp}</td>
            <td className={styles.stat}>{power}</td>
            <td className={styles.stat}>{accuracy}</td>
        </tr>
    )
}

export default function MovesList({ moves, lvl = false }){
    const moveHeader = ['Name', 'Type', 'Cat.', 'PP', 'Pwr.', 'Acc.'];
    lvl ? moveHeader.unshift('Level') : null;

    return (
        <TableLayout 
            thead={moveHeader.map((header, index) => (<th key={index} className={styles.th}>{header}</th>))}
            tbody={moves.map((move) => <MoveInd key={move._id} move={move} lvl={lvl} />)}
        />
    )
}