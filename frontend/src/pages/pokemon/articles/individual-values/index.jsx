import IndivdualValues from '../../../../components/pokemon/mdxPages/individualValues/individualValues.mdx';
import PokemonLayout from "../../PokemonLayout";

export default function IndivdualValuesPage(){
    return (
        <PokemonLayout>
                 <div className={`article-container`}>
                <IndivdualValues />
            </div>
        </PokemonLayout>
    )
}