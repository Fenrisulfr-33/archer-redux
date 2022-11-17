import style from './Loading.module.css';

/**
 * Because of server side rendering this component creates a temporary loading page so
 *  your aren't just watching a blank screen
 * @returns 
 *  The loading pill componenet
 */
export default function Loading() {
    return (
        <div className={style.loader}>
            <div className={style.pill}>
                <div className={style.ball}></div>
                <div className={style.ball}></div>
                <div className={style.ball}></div>
            </div>
        </div>
    )
}