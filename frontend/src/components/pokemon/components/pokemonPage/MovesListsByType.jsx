import MovesList from "./MovesList";

export default function MovesListsByType({ moves }) {
  return (
    <div className={"grid grid-cols-1 tablet:grid-cols-2"}>
      <div className="col-span-1 flex-col">
        {moves?.["level-up"] && (
          <div id="level-up-moves" className={""}>
            <h4 className="">Learnt on Level Up</h4>
            <MovesList moves={moves["level-up"]} lvl={true} />
          </div>
        )}
        {moves?.egg && (
          <div id="egg-moves" className={""}>
            <h4 className="">Egg Moves</h4>
            <MovesList moves={moves.egg} />
          </div>
        )}
        {moves?.tutor && (
          <div id="tutor-moves" className={""}>
            <h4 className="">Tutor</h4>
            <MovesList moves={moves.tutor} />
          </div>
        )}
      </div>
      <div className="col-span-1 flex-col">
        {moves?.machine && (
          <div id="machine-moves" className={""}>
            <h4 className="">{`Tm's`}</h4>
            <MovesList moves={moves.machine} />
          </div>
        )}
        {moves?.record && (
          <div id="record-moves" className={""}>
            <h4 className="">Record</h4>
            <MovesList moves={moves.record} />
          </div>
        )}
      </div>
    </div>
  );
}
