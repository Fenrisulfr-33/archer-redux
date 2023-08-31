import ArticleListItem from "./ArticleListItem";

export default function ArticlesList({ list, route }) {
  return (
    <div className="py-10 px-5 ">
      <div className={`bg-gray-600 p-4 rounded-lg flex flex-col space-y-4`}>
        {list.map((article) => (
          <ArticleListItem meta={article} route={route} />
        ))}
      </div>
    </div>
  );
}
