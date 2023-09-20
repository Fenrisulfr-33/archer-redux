import PokemonLinkCard from "@/components/pokemon/PokemonLinkCard";
import DataContainer from "@/components/pokemon/DataContainer";
import DataSection from "@/components/pokemon/DataSection";
import DataRow from "@/components/pokemon/DataRow";

export default function AbilityPage({ ability }) {
    const rows = [
        { title: "Name", type: ability?.name?.english },
        { title: "Generation", info: ability?.generation },
        { title: "Effect", info: ability?.description?.["sword-shield"] },
        { title: "Short Effect", info: ability?.effect?.shortEffect },
        { title: "Full Effect", info: ability?.effect?.full },
    ];
    return (
        <div className={"font-mono"}>
            <DataContainer title={`${ability?.name?.english} [ability]`}>
                <DataSection>
                    {rows.map((row) => (
                        <DataRow
                            title={row.title}
                            info={row.info}
                            widthOne={"w-1/2 phone:w-1/4"}
                            widthTwo={"w-1/2 phone:w-3/4"}
                            type={row?.type}
                        />
                    ))}
                </DataSection>
            </DataContainer>
            <DataContainer title={"Pokemon with Ability as Normal"}>
                <DataSection>
                    <div className="grid grid-cols-1 phone:grid-cols-2 tablet:grid-cols-4">
                        {ability.pokemonWithAbility.normal &&
                            ability.pokemonWithAbility.normal.map((pokemon) => (
                                <PokemonLinkCard pokemon={pokemon} />
                            ))}
                    </div>
                </DataSection>
            </DataContainer>
            <DataContainer title={"Pokemon with Ability as Hidden"}>
                <DataSection>
                    <div className="grid grid-cols-1 phone:grid-cols-2 tablet:grid-cols-4">
                        {ability.pokemonWithAbility.hidden &&
                            ability.pokemonWithAbility.hidden.map((pokemon) => (
                                <PokemonLinkCard pokemon={pokemon} />
                            ))}
                    </div>
                </DataSection>
            </DataContainer>
        </div>
    );
}
