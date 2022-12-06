import { colors } from "../variables/typeColors";
import MoveModal from "./MoveModal";

const styles = {
    stat: 'py-2 px-1 text-center',
    tr: 'border-b border-stone-400 hover:bg-stone-200',
    th: 'py-3 px-1 text-center'
}

function MoveInd({ move, lvl }){
    const { level, _id, name, type, category, pp, power, accuracy } = move;
    const route = `/pokemon/moves/${_id}`;
    const typeOne = colors[type.toLowerCase()];
    
    return(
        <tr className={styles.tr}>
            {lvl && <th className={styles.th}>{level}</th>}
            <td className={`${styles.stat} hover:text-stone-400`}><MoveModal move={move} /></td>
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
        <div className="overflow-x-auto  m-2">
            <div className="py-2 inline-block min-w-full">
                <div className="overflow-hidden">
                    <table className=" min-w-full font-mono bg-gray-300 text-xs laptop:text-sm">
                        <thead>
                            <tr className="bg-gray-500 text-gray-300 uppercase  leading-normal rounded-t-lg">
                                {moveHeader.map((header) => (<th className={styles.th}>{header}</th>))}
                            </tr>
                        </thead>
                        <tbody className="text-gray-600  font-light">
                            {moves.map((move) => <MoveInd key={move._id} move={move} lvl={lvl} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}