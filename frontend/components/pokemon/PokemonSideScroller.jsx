import PokemonBuildModal from './PokemonBuildModal';

export default function PokemonSideScroller({ list, margin, terra }) {
  return (
    <div className={`bg-gray-600 rounded-lg border-2 border-purple-100 ${margin}`}>
      <div
        className={"flex flex-row p-2 space-x-2 overflow-auto scrollbar-hide"}
      >
        {list.map(
          ({
            id,
            name,
            type,
            ability,
            terraType,
            nature,
            heldItem,
            role,
            moves,
            otherMoves,
            evs,
            notes,
          }) => (
            <PokemonBuildModal
              id={id}
              name={name}
              type={type}
              ability={ability}
              terraType={terraType}
              nature={nature}
              heldItem={heldItem}
              role={role}
              moves={moves}
              otherMoves={otherMoves}
              evs={evs}
              notes={notes}
              terra={terra}
            />
          )
        )}
      </div>
    </div>
  );
}
