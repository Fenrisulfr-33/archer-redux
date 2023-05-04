import TypeChart from '../../../../components/pokemon/mdxPages/typeChart/typeChart.mdx';
import MDXWrapper from '../../../../components/MDXWrapper';
import PokemonLayout from "../../PokemonLayout";

export default function TypeChartPage(){
    return (
        <PokemonLayout>
            <MDXWrapper>
                <TypeChart />
            </MDXWrapper>
        </PokemonLayout>
    )
}