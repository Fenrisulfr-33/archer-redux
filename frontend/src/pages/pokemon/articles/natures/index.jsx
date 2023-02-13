import Natures from '../../../../components/pokemon/mdxPages/natures/natures.mdx';
import MDXWrapper from '../../../../components/MDXWrapper';
import PokemonLayout from "../../PokemonLayout";

export default function NaturesPage(){
    return (
        <PokemonLayout>
            <MDXWrapper>
                <Natures />
            </MDXWrapper>
        </PokemonLayout>
    )
}