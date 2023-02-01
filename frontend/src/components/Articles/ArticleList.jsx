/**
 * 12-05-2022 @author Archer - This list view for a page of articles
 */
import Link from "next/link";

const styles = {
    article: 'p-5 items-center space-y-4 border-2 border-purple-300 rounded-xl shadow-lg bg-gray-700 hover:shadow-lg hover:shadow-sky-300',
    title: 'text-sky-300 text-opacity-80 font-extrabold text-lg tablet:text-3xl',
}
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
        <div className='pt-10 px-5 flex flex-col space-y-4'>
            {articles.map((article) => (
                <ArticleItem key={article.id} article={article} id={article.id} family={family} />
            ))}
        </div>
    )
}

/**
 * @props { article, id, family }
 *  article - The article is the MDX component and it contains meta data to display in list view, including the id
 *  id - is the articles index in the array
 *  family - helps add the route for when clicked
 * @returns
 *  An article component with title, author, date, and brief desc
 */
const ArticleItem = ({ article, id, family }) => {
    return (
        <Link href={family ? `/${family}/articles/${id}`: `/articles/${id}`} as={family ? `/${family}/articles/${id}`: `/articles/${id}`} passHref>
            <div className={styles.article}>
                <h3 className={styles.title}>{article.info.title}</h3>
                <p className={`italic font-mono text-md text-purple-300 `}>{article.info.author} - {article.info.date}</p>
                <p className={`text-sm font-mono text-gray-300`}>{article.info.description}</p>
            </div>
        </Link>
    )
}