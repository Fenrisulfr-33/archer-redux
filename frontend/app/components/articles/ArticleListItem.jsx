import Link from "next/link";

export default function ArticleItem({ meta, route }) {
  return (
    <Link href={`${route}${meta.slug}`} passHref>
      <div
        className={`p-5 items-center space-y-4 border-2 border-purple-300 rounded-xl shadow-lg bg-gray-800 hover:shadow-lg hover:shadow-gray-300 font-mono`}
      >
        <div
          className={`bg-purple-600 text-gray-300 p-2 rounded-lg font-extrabold text-[min(2vw,100px)] truncate`}
        >
          {meta.title}
        </div>
        <div className={`text-gray-400 italic text-[min(2vw,100px)] truncate`}>
          {meta.author} - {meta.date}
        </div>
        <div className={`text-purple-50  text-[min(2vw,100px)] truncate `}>
          {meta.description}
        </div>
      </div>
    </Link>
  );
}
