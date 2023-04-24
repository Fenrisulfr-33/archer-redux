import Breeding from '../../../../components/pokemon/mdxPages/breeding/breeding.mdx';
import MDXWrapper from '../../../../components/MDXWrapper';
import PokemonLayout from "../../PokemonLayout";

export default function BreedingPage(){
    return (
        <PokemonLayout>
            <MDXWrapper>
                <Breeding />
            </MDXWrapper>
        </PokemonLayout>
    )
}