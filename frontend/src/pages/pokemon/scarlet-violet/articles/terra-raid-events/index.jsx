import TerraRaidEvents from '../../../../../components/pokemon/mdxPages/terraRaidEvents/terraRaidEvents.mdx';
import MDXWrapper from '../../../../../components/MDXWrapper';
import PokemonLayout from "../../../PokemonLayout";

export default function TypeChartPage(){
    return (
        <PokemonLayout>
            <MDXWrapper>
                <TerraRaidEvents />
            </MDXWrapper>
        </PokemonLayout>
    )
}