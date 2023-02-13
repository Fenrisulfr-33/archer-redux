import EffortValues from '../../../../components/pokemon/mdxPages/effortValues/effortValues.mdx';
import MDXWrapper from '../../../../components/MDXWrapper';
import PokemonLayout from "../../PokemonLayout";

export default function EffortValuesPage(){
    return (
        <PokemonLayout>
            <MDXWrapper>
                <EffortValues />
            </MDXWrapper>
        </PokemonLayout>
    )
}