import PokemonLayout from './PokemonLayout';
import HomePage from '../../articles/pokemon/home-page.mdx';

export default function Pokemon() {
    return (  
        <PokemonLayout>
            <div className={`article-container`}>
                <HomePage />
            </div>
        </PokemonLayout>
    );
}