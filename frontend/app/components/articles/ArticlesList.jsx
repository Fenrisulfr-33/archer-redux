import ArticleListItem from "./ArticleListItem";

export default function ArticlesList({ list, route }) {
  return (
    <div className="py-10 px-5 space-y-4 flex flex-col">
        {list.map((article) => (
          <ArticleListItem meta={article} route={route} />
        ))}
    </div>
  );
}
