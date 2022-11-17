import Link from "next/link";
import { data } from '../../../data/articles';

const styles = {
    article: 'p-5 items-center space-y-4 border-2 border-purple-300 rounded-xl shadow-lg bg-gray-700 hover:shadow-lg hover:shadow-sky-300',
    title: 'text-sky-300 text-opacity-80 font-extrabold text-lg tablet:text-3xl',
}
/**
 *  Data is hard coded as an array, will eventually upgrade to a CMS
 * @returns 
 *  The list of article and their meta data
 */
export default function ArticleList() {
    return (
        <div className='w-1/2 mx-auto py-20 space-y-4'>
            {data.map((article) => (
                <ArticleItem key={article.id} article={article} id={article.id}/>
            ))}
        </div>
    )
}

/**
 * @props { article, id }
 *  The article is the MDX component and it contains meta data to display in list view, including the id
 * @returns
 *  An article component with title, author, date, and brief desc
 */
const ArticleItem = ({ article, id }) => {
    return (
        <Link href='/articles/[id]' as={`/articles/${id}`} passHref>
            <div className={styles.article}>
                <h3 className={styles.title}>{article.info.title}</h3>
                <p className={`italic font-mono text-md text-purple-300 `}>{article.info.author} - {article.info.date}</p>
                <p className={`text-sm font-mono text-gray-300`}>{article.info.description}</p>
            </div>
        </Link>
    )
}