import DataContainer from "@/components/pokemon/DataContainer";
import DataSection from "@/components/pokemon/DataSection";

export default function BaseStats({
    stats: { hp, atk, def, spatk, spdef, spd, total },
}) {
    return (
        <div className="-m-2">
            <DataContainer title={"Base Stats"}>
                <DataSection>
                    <div className="space-y-2 text-xs tablet:text-base">
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <div className="w-1/12 p-1">Min</div>
                                <div className="row-flex w-10/12 text-gray-900 bold">
                                    <div
                                        className={`bg-green-600 w-1/6 p-2 rounded-l`}
                                    >
                                        1
                                    </div>
                                    <div className={`bg-green-400 w-1/6 p-2`}>
                                        2
                                    </div>
                                    <div className={`bg-green-300 w-1/6 p-2`}>
                                        3
                                    </div>
                                    <div className={`bg-sky-500 w-1/6 p-2`}>
                                        4
                                    </div>
                                    <div className={`bg-sky-300 w-1/6 p-2`}>
                                        5
                                    </div>
                                    <div
                                        className={`bg-purple-200 w-1/6 p-2 rounded-r`}
                                    >
                                        6
                                    </div>
                                </div>
                                <div className="w-1/12 p-1">Max</div>
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
                        <div className="">Total: {total}</div>
                    </div>
                </DataSection>
                <DataSection>
                    The Min/Max values are calculated for a Pokémon at level
                    100. Maximum values are based on a beneficial nature, 252
                    EVs, 31 IVs. Minimum values are based on a hindering nature,
                    0 EVs, 0 IVs.
                </DataSection>
                <DataSection>
                    Tiers are calculated from the Pokémon with the highest
                    available stat for that stat. Example: Blissey has the
                    highest base HP at 255, so all tiers are divided by 6 from
                    255.
                </DataSection>
                <DataSection>
                    This shows a better representation of where a Pokémon's base
                    stat lies compared to the highest that stat can be. The
                    length of the stat relative to the Tier also shows where it
                    sits inside the Tier.
                </DataSection>
            </DataContainer>
        </div>
    );
}

const StatBarRow = ({ stat }) => (
    <div className="row-flex">
        <div className="w-1/12 p-1">{stat.min}</div>
        <div className="w-10/12">
            <div
                className={`flex flex-row justify-between rounded-md text-black p-1 ${stat.tier}`}
                style={{ width: `${stat.width}%` }}
            >
                <div>{stat.base}</div>
            </div>
        </div>

        <div className="w-1/12 p-1">{stat.max}</div>
    </div>
);
