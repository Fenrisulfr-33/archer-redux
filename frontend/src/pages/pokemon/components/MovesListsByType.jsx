import MovesList from "./MovesList";

const styles = {
    container: 'col=span-1 grid grid-cols-1 tablet:grid-cols-2 mt-2',
    list: 'col-span-1',
}

export default function MovesListsByType({ moves }) {
    return (
        <div className={styles.container}>
            {moves?.lvl && <div id='level-up-moves' className={styles.list}>
                <h4 className=''>Learnt on Level Up</h4>
                <MovesList moves={moves.lvl} lvl={true} />
            </div>}
            {moves?.egg && <div id='egg-moves' className={styles.list}>
                <h4 className=''>Egg Moves</h4>
                <MovesList moves={moves.egg} />
            </div>}
            {/* This would determine either TM's or TR's based upon generation */}
            {moves?.machine && <div id='machine-moves' className={styles.list}>
                <h4 className=''>{`Tm's`}</h4>
                <MovesList moves={moves.machine} />
            </div>}
            {moves?.record && <div id='record-moves' className={styles.list}>
                <h4 className=''>Record</h4>
                <MovesList moves={moves.record} />
            </div>}
            {moves?.tutor && <div id='tutor-moves' className={styles.list}>
                <h4 className=''>Tutor</h4>
                <MovesList moves={moves.tutor} />
            </div>}
        </div>
    );
}