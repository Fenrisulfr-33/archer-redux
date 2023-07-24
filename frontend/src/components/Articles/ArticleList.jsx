/**
 * 12-05-2022 @author Archer - This list view for a page of articles
 */
import ArticleItem from "./ArticleItem";
/**
 *  Data is hard coded as an array, will eventually upgrade to a CMS
 * @props { articles, family }
 *  articles - list of articles
 *  family - is for sub tabs that can have lists of articles
 * @returns
 *  The list of article and their meta data
 */
export default function ArticleList({ articles, family }) {
  return (
    <div className="py-10 px-5 ">
      <div
        className={`bg-gray-600 p-4 rounded-lg flex flex-col space-y-4`}
      >
        {articles.map((article) => (
          <ArticleItem
            key={article.id}
            article={article}
            id={article.id}
            family={family}
          />
        ))}
      </div>
    </div>
  );
}
