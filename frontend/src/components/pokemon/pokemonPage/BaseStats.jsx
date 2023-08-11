import BaseStat from "./BaseStat";
import DataContainer from "@/components/pokemon/DataContainer";
import DataSection from "@/components/pokemon/DataSection";

export default function BaseStats({
  stats: { hp, atk, def, spatk, spdef, spd, total },
}) {
  return (
    <div className="-m-2">
    <DataContainer title={"Base Stats"}>
      <DataSection>
        <div className="space-y-2">
          <div className="flex flex-row">
            <div className="w-4/12 flex flex-row">
              <div className={"border w-1/4 m-1 rounded p-1 bg-purple-100"}>
                Stat
              </div>
              <div className={"border w-1/4 m-1 p-1 rounded"}>Min</div>
              <div className={"border w-1/4 m-1 p-1 rounded"}>Base</div>
              <div className={"border w-1/4 m-1 p-1 rounded"}>Max</div>
            </div>
            <div className="w-8/12 flex flex-row">
              <div className={`bg-green-600 w-1/6 p-2 rounded-l`}>Tier 1</div>
              <div className={`bg-green-400 w-1/6 p-2`}>Tier 2</div>
              <div className={`bg-green-300 w-1/6 p-2`}>Tier 3</div>
              <div className={`bg-sky-500 w-1/6 p-2`}>Tier 4</div>
              <div className={`bg-sky-300 w-1/6 p-2`}>Tier 5</div>
              <div className={`bg-purple-200 w-1/6 p-2 rounded-r`}>Tier 6</div>
            </div>
          </div>
          <BaseStat title={"hp"} stat={hp} />
          <BaseStat title={"atk"} stat={atk} />
          <BaseStat title={"def"} stat={def} />
          <BaseStat title={"spatk"} stat={spatk} />
          <BaseStat title={"spdef"} stat={spdef} />
          <BaseStat title={"spd"} stat={spd} />
          <div classNae={"label"}>Total: {total}</div>
        </div>
      </DataSection>
      <DataSection>
        The Min/Max values are calculated for a Pokémon at level 100. Maximum
        values are based on a beneficial nature, 252 EVs, 31 IVs. Minimum values
        are based on a hindering nature, 0 EVs, 0 IVs.
      </DataSection>
      <DataSection>
        Tiers are calculated from the Pokémon with the highest available stat
        for that stat. Example: Blissey has the highest base HP at 255, so all
        tiers are divided by 6 from 255. Whereas the highest DEF is calculated
        from Shuckle at 230. This shows a better representation of where a
        Pokémon's base stat lies compared to the highest that stat can be. The
        length of the stat relative to the Tier also shows where it sits inside
        the Tier.
      </DataSection>
    </DataContainer>
    </div>
  );
}
