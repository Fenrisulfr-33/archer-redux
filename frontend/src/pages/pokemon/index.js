import HomePage from '../../components/pokemon/mdxPages/homePage/homePage.mdx'
import PokemonLayout from './PokemonLayout';

export default function Pokemon() {
    return (  
        <PokemonLayout>
            <div className={`article-container`}>
                <HomePage />
            </div>
        </PokemonLayout>
    );
}