import { useRouter } from "next/router";
import { data } from "../../../components/pokemon/data/articles";
import Article from "../../../components/Articles/Article";
import PokemonLayout from '../PokemonLayout';

export default function ArticlePage() {
    const router = useRouter();
    const { id } = router.query;
    const found = data.find((article) => {
        if(article.id === Number(id)){
            return article.body;
        }
    });
    return(
        <PokemonLayout>
            <Article>
                {found?.body ? found?.body : 'Article Not Found'}
            </Article>
        </PokemonLayout>
    )
}