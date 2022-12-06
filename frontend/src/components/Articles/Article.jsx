/**
 * 12-05-2022 @author Archer - This is a basic template for any article anywhere on the site.
 *  I would like to update this where the styles are kept in the same file not a module.css
 */
import style from './Article.module.css';

export default function Article({ children }) {
    return(
        <div className={style.article}>
            {children}
        </div>
    )
}