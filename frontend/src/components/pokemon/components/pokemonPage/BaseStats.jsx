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
          <BaseStat title={"hp"} stat={hp} />
          <BaseStat title={"atk"} stat={atk} />
          <BaseStat title={"def"} stat={def} />
          <BaseStat title={"spatk"} stat={spatk} />
          <BaseStat title={"spdef"} stat={spdef} />
          <BaseStat title={"spd"} stat={spd} />
          <div className={'label'}>Total: {total}</div>
        </div>
      </div>
    </div>
  );
}