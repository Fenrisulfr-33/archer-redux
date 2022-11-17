import ArticleList from '../../components/Articles/ArticleList'

/**
 * The purpose of having the ArticleList componenet being called instead of just having the componenets contents here is because...
 * 
 *  The List componenet need to be created for just articles, but this is hard coded to specific articles.
 *  Meaning in time when I get the CMS connected you can call the articles you want from the server and then attach them as Static Props to the List componenet.
 * 
 */
export default function Articles() {
    return ( 
        <ArticleList />
    )
}