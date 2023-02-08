import HomePage from './pokemonHome.mdx';
import MDXWrapper from '../../components/MDXWrapper';
import PokemonLayout from './PokemonLayout';

export default function Pokemon() {
    return (  
        <PokemonLayout>
            <MDXWrapper>
                <HomePage />
            </MDXWrapper>
        </PokemonLayout>
    );
}