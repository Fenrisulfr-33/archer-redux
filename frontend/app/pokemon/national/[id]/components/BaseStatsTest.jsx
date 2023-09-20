import BaseStatRow from "./BaseStatRow";
import DataContainer from "@/components/pokemon/DataContainer";
import DataSection from "@/components/pokemon/DataSection";

export default function BaseStatsTest({
  stats: { hp, atk, def, spatk, spdef, spd, total },
}) {
  return (
    <div className="-m-2">
      <DataContainer title={"Base Stats"}>
        <DataSection>
          <div className="space-y-2">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div className={"border w-1/4 m-1 rounded p-1 bg-purple-100"}>
                  Stat
                </div>
                <div className={"border w-1/4 m-1 p-1 rounded"}>Min</div>
                <div className={"border w-1/4 m-1 p-1 rounded"}>Base</div>
                <div className={"border w-1/4 m-1 p-1 rounded"}>Max</div>
              </div>
              <MinBaseMaxRow title={"HP"} stat={hp} />
              <MinBaseMaxRow title={"Atk"} stat={atk} />
              <MinBaseMaxRow title={"Def"} stat={def} />
              <MinBaseMaxRow title={"SpAtk"} stat={spatk} />
              <MinBaseMaxRow title={"SpDef"} stat={spdef} />
              <MinBaseMaxRow title={"Spd"} stat={spd} />
              <div className="flex flex-row">
                <div className={`bg-green-600 w-1/6 p-2 rounded-l`}>1</div>
                <div className={`bg-green-400 w-1/6 p-2`}>2</div>
                <div className={`bg-green-300 w-1/6 p-2`}>3</div>
                <div className={`bg-sky-500 w-1/6 p-2`}>4</div>
                <div className={`bg-sky-300 w-1/6 p-2`}>5</div>
                <div className={`bg-purple-200 w-1/6 p-2 rounded-r`}>6</div>
              </div>
              <div className="py-2 flex flex-col space-y-2">
                <StatBarRow stat={hp} />
                <StatBarRow stat={atk} />
                <StatBarRow stat={def} />
                <StatBarRow stat={spatk} />
                <StatBarRow stat={spdef} />
                <StatBarRow stat={spd} />
              </div>
            </div>
            {/* <BaseStatRow title={"HP"} stat={hp} />
            <BaseStatRow title={"Atk"} stat={atk} />
            <BaseStatRow title={"Def"} stat={def} />
            <BaseStatRow title={"SpAtk"} stat={spatk} />
            <BaseStatRow title={"SpDef"} stat={spdef} />
            <BaseStatRow title={"Spd"} stat={spd} /> */}
            <div className={"label"}>Total: {total}</div>
          </div>
        </DataSection>
        <DataSection>
          The Min/Max values are calculated for a Pokémon at level 100. Maximum
          values are based on a beneficial nature, 252 EVs, 31 IVs. Minimum
          values are based on a hindering nature, 0 EVs, 0 IVs.
        </DataSection>
        <DataSection>
          Tiers are calculated from the Pokémon with the highest available stat
          for that stat. Example: Blissey has the highest base HP at 255, so all
          tiers are divided by 6 from 255. Whereas the highest DEF is calculated
          from Shuckle at 230. This shows a better representation of where a
          Pokémon's base stat lies compared to the highest that stat can be. The
          length of the stat relative to the Tier also shows where it sits
          inside the Tier.
        </DataSection>
      </DataContainer>
    </div>
  );
}

const MinBaseMaxRow = ({ title, stat }) => (
  <div className="flex flex-row">
    <div className={"border w-1/4 m-1 rounded p-1 bg-purple-100"}>{title}</div>
    <div className={"border w-1/4 m-1 p-1 rounded"}>{stat.min}</div>
    <div className={"border w-1/4 m-1 p-1 rounded"}>{stat.base}</div>
    <div className={"border w-1/4 m-1 p-1 rounded"}>{stat.max}</div>
  </div>
);

const StatBarRow = ({ stat }) => (
  <div
    className={`rounded-md h-full ${stat.tier}`}
    style={{ width: `${stat.width}%` }}
  >
    <span className="inline-block"></span>
  </div>
);
