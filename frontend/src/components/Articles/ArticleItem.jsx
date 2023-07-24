import Link from "next/link";
/**
 * @props { article, id, family }
 *  article - The article is the MDX component and it contains meta data to display in list view, including the id
 *  id - is the articles index in the array
 *  family - helps add the route for when clicked
 * @returns
 *  An article component with title, author, date, and brief desc
 */
export default function ArticleItem({ article, id, family }){
    return (
        <Link href={family ? `/${family}/articles/${id}`: `/articles/${id}`} as={family ? `/${family}/articles/${id}`: `/articles/${id}`} passHref>
            <div className={`p-5 items-center space-y-4 border-2 border-purple-300 rounded-xl shadow-lg bg-gray-800 hover:shadow-lg hover:shadow-gray-300 font-mono`}>
                <div className={`bg-purple-600 text-gray-300 p-2 rounded-lg font-extrabold text-[min(2vw,100px)] truncate`}>{article.info.title}</div>
                <div className={`text-gray-400 italic text-[min(2vw,100px)] truncate`}>{article.info.author} - {article.info.date}</div>
                <div className={`text-purple-50  text-[min(2vw,100px)] truncate `}>{article.info.description}</div>
            </div>
        </Link>
    )
}