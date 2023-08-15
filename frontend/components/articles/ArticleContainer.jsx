export default function ArticleContainer({ children }) {
  return (
    <div className="border border-purple-100 rounded m-2 py-2 bg-gray-800 h-full">
      <div className={`article-container`}>{children}</div>
    </div>
  );
}
