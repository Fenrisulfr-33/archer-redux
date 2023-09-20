import MoveList from "./MoveList";

export default function MoveTypeLists({ moves, pokemonName }) {
  return (
    <div className={"grid grid-cols-1 tablet:grid-cols-2 font-mono"}>
      <div className="col-span-1 flex-col">
        {moves?.["level-up"] && (
          <div id="level-up-moves" className={""}>
            <div className="text-xl font-bold">Moves Learnt on Level Up</div>
            <div className="bg-gray-800 mx-2 p-2 rounded">
              {pokemonName} can learn these moves by leveling up.
            </div>
            <MoveList moves={moves["level-up"]} levelUp={true} />
          </div>
        )}
        {moves?.egg && (
          <div id="egg-moves" className={""}>
            <div className="text-xl font-bold">Egg Moves</div>
            <div className="bg-gray-800 mx-2 p-2 rounded">
              {pokemonName} can learn these moves by breeding with compatible
              parents.
            </div>
            <MoveList moves={moves.egg} />
          </div>
        )}
        {moves?.tutor && (
          <div id="tutor-moves" className={""}>
            <div className="text-xl font-bold">Move Tutor moves</div>
            <div className="bg-gray-800 mx-2 p-2 rounded">
              {pokemonName} can learn these moves from the Move Tutor.
            </div>
            <MoveList moves={moves.tutor} />
          </div>
        )}
      </div>
      <div className="col-span-1 flex-col">
        {moves?.["hidden-machine"] && (
          <div id="hm-moves" className={""}>
            <div className="text-lg font-bold">HM moves</div>
            <div className="bg-gray-800 mx-2 p-2 rounded">
              {pokemonName} can learn these moves from Hidden Machines.
            </div>
            <MoveList moves={moves["hidden-machine"]} hmTrue={true} />
          </div>
        )}
        {moves?.["technical-machine"] && (
          <div id="tm-moves" className={""}>
            <div className="text-lg font-bold">TM moves</div>
            <div className="bg-gray-800 mx-2 p-2 rounded">
              {pokemonName} can learn these moves from Technical Machines.
            </div>
            <MoveList
              moves={moves["technical-machine"]}
              tmTrue={true}
            />
          </div>
        )}
        {moves?.["technical-record"] && (
          <div id="record-moves" className={""}>
            <div className="">TR moves</div>
            <div className="bg-gray-800 mx-2 p-2 rounded">
              {pokemonName} can learn these moves from Technical Records.
            </div>
            <MoveList moves={moves["technical-record"]} trTrue={true} />
          </div>
        )}
      </div>
      <div className="col-span-1 tablet:col-span-2 flex-col">
        {moves?.["transfer-only"] && (
          <div id="hm-moves" className={""}>
            <div className="text-lg font-bold">Transfer-only moves</div>
            <div className="bg-gray-800 mx-2 p-2 rounded">
              {pokemonName} can learn these moves from previous generation
              methods.
            </div>
            <MoveList moves={moves["transfer-only"]} transfer={true} />
          </div>
        )}
      </div>
    </div>
  );
}
