import BaseStat from "./BaseStat";

export default function BaseStats({ stats }) {
  return (
    <div
      id="base_stats"
      className={"bg-gray-600 rounded-2xl border-2 border-purp-100 laptop:w-1/3"}
    >
      <div className={"m-2 bg-gray-700 rounded-lg"}>
        <div className={"p-2 col-flex space-y-2"}>
          <div className={"row-flex justify-between"}>
            <div>
              {" "}
              <div className={""}>Base Stats:</div>
            </div>
            {/* <div className={"row-flex space-x-1"}>
              <div className={" bg-green-600 rounded-lg px-1"}>Tier 1</div>
              <div className={" bg-green-400 rounded-lg px-1"}>Tier 2</div>
              <div className={" bg-green-300 rounded-lg px-1"}>Tier 3</div>
              <div className={" bg-sky-500 rounded-lg px-1"}>Tier 4</div>
              <div className={" bg-sky-300 rounded-lg px-1"}>Tier 5</div>
              <div className={" bg-purp-200 rounded-lg px-1"}>Tier 6</div>
              <div className={" bg-purple-50 rounded-lg px-1"}>Tier 7</div>
            </div> */}
          </div>
          <BaseStat title={"hp"} stat={stats.hp} />
          <BaseStat title={"atk"} stat={stats.atk} />
          <BaseStat title={"def"} stat={stats.def} />
          <BaseStat title={"spatk"} stat={stats.spatk} />
          <BaseStat title={"spdef"} stat={stats.spdef} />
          <BaseStat title={"spd"} stat={stats.spd} />
          <div>Total: {stats.total}</div>
        </div>
      </div>
    </div>
  );
}
