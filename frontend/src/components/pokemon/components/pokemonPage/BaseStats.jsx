import BaseStat from "./BaseStat";

export default function BaseStats({ stats: {hp, atk, def, spatk, spdef, spd, total} }) {
  return (
    <div
      id="base_stats"
      className={"bg-gray-600 rounded-2xl border-2 border-purple-100"}
    >
      <div className={"m-2 bg-gray-700 rounded-lg"}>
        <div className={"p-2 col-flex space-y-2"}>
          <div className={"row-flex justify-between"}>
            <div className={"label"}>Base Stats:</div>
            <div className={'label'}>Tiers</div>
          </div>
          <BaseStat title={"hp"} stat={hp} width={`w-${Math.round([hp*100]/255)}%`} />
          <BaseStat title={"atk"} stat={atk} width={`w-${Math.round([atk*100]/180)}%`} />
          <BaseStat title={"def"} stat={def} width={`w-${Math.round([def*100]/230)}%`} />
          <BaseStat title={"spatk"} stat={spatk} width={`w-${Math.round([spatk*100]/180)}%`} />
          <BaseStat title={"spdef"} stat={spdef} width={`w-${Math.round([spdef*100]/230)}%`} />
          <BaseStat title={"spd"} stat={spd} width={`w-${Math.round([spd*100]/200)}%`} />
          <div className={'label'}>Total: {total}</div>
        </div>
      </div>
    </div>
  );
}