import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { data } from "../../../components/pokemon/data/articles";
import ArticleButtons from "../../../components/Articles/ArticleButtons";
import Article from "../../../components/Articles/Article";

export default function ArticlePage() {
    const router = useRouter();
    const { id } = router.query; // Type string
    const [content, setContent] = useState();
    const [error, setError] = useState();
    useEffect(() => {
        const found = data.find((article) => {
            return article.id === Number(id);
        });
        if (found) {
            setContent(found.body);
        }
    }, [id]);
    return(
            <div className={``}>
                <ArticleButtons id={id} length={data.length}/>
                    <Article>
                        {error ? error : null}
                        {content ? content : null}
                    </Article>
                <ArticleButtons id={id} length={data.length}/>
            </div>
    )
}