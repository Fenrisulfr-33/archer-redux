import IndivdualValues from '../../../../components/pokemon/mdxPages/individualValues/individualValues.mdx';
import MDXWrapper from '../../../../components/MDXWrapper';
import PokemonLayout from "../../PokemonLayout";

export default function IndivdualValuesPage(){
    return (
        <PokemonLayout>
            <MDXWrapper>
                <IndivdualValues />
            </MDXWrapper>
        </PokemonLayout>
    )
}