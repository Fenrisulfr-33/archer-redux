import MovesList from "./MovesList";

export default function MovesListsByType({ moves, pokemonName }) {
  return (
    <div className={"grid grid-cols-1 tablet:grid-cols-2"}>
      <div className="col-span-1 flex-col">
        {moves?.["level-up"] && (
          <div id="level-up-moves" className={""}>
            <h4 className="">Moves Learnt on Level Up</h4>
            <MovesList moves={moves["level-up"]} levelUp={true} />
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
            <h4 className="">Move Tutor moves</h4>
            <p>{pokemonName} can learn these moves from the Move Tutor</p>
            <MovesList moves={moves.tutor} />
          </div>
        )}
      </div>
      <div className="col-span-1 flex-col">
        {moves?.["hidden-machine"] && (
          <div id="hm-moves" className={""}>
            <h4 className="">{`HM moves`}</h4>
            <MovesList moves={moves["hidden-machine"]} hmTrue={true} />
          </div>
        )}
        {moves?.["technical-machine"] && (
          <div id="tm-moves" className={""}>
            <h4 className="">{`TM moves`}</h4>
            <MovesList moves={moves["technical-machine"]} tmTrue={true} />
          </div>
        )}
        {moves?.["technical-record"] && (
          <div id="record-moves" className={""}>
            <h4 className="">TR moves</h4>
            <MovesList moves={moves["technical-record"]} trTrue={true} />
          </div>
        )}
      </div>
      <div className="col-span-1 tablet:col-span-2 flex-col">
        {moves?.["transfer-only"] && (
          <div id="hm-moves" className={""}>
            <h4 className="">Transfer-only moves</h4>
            <MovesList moves={moves["transfer-only"]} transfer={true} />
          </div>
        )}
      </div>
    </div>
  );
}
