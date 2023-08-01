import ArticleItem from "./ArticleItem";
import { articlesData } from "../../articles/mainArticles";

export default function ArticleList() {
  return (
    <div className="py-10 px-5 ">
      <div className={`bg-gray-600 p-4 rounded-lg flex flex-col space-y-4`}>
        {articlesData.map((article) => (
          <ArticleItem meta={article} />
        ))}
      </div>
    </div>
  );
}
