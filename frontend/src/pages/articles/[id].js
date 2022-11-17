import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { data } from "../../../data/articles";
// import Error from "../../components/errors/Error";
import ArticleButtons from "../../components/Articles/ArticleButtons";
import Article from "../../components/Articles/Article";

export default function ArticlePage() {
    const router = useRouter();
    const { id } = router.query; // Type string

    const [content, setContent] = useState(); // Set the article because we are not using a backend or CMS right now
    const [loaded, setLoaded] = useState(false); // Stop page from loading right away
    const [error, setError] = useState(null); // If the user tries to access an article that doesn't exsist;

    useEffect(() => {
            const found = data.find((article) => {
                return article.id === Number(id);
            });
            if (!found) {setError(404)}
            setContent(found);
            setLoaded(true);
    }, [id]);

    if (error) {
        return (
            <>
                <ArticleButtons id={id} length={data.length} />
                <Error statusCode={error} />
            </>
        )
    } else if (loaded) {
        const Body = content.body;
        return (
            <div className={``}>
                <ArticleButtons id={id} length={data.length}/>
                <Article>
                    <Body />
                </Article>
                <ArticleButtons id={id} length={data.length}/>
            </div>
        )
    } else {
        return (
            <>
                Loading...
            </>
        )
    }
}