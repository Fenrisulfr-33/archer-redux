import ArticleList from "@/components/articles/ArticlesList";
import { mainArticles } from "@/articles/main";

export default function Articles() {
    return (
        <div className="min-h-screen">
            <ArticleList list={mainArticles} route={"articles/"} />
        </div>
    );
}
