
/**
 * 12-05-2022 @author Archer - This is a the buttons toolbar for articles
 *  I would like to make a whole toolbar that can search all artilces and attach it to the articles itself
 */
import Link from 'next/link';
/**
 * This is for the previous and next button so when you are in the articles you can contiune to read without going back
 * @props { id, length }
 *  The length is used to determine wether the next or previous button can appear  
 * @returns 
 *  Two buttons at most at the top of the page
 */
export default function ArticleButtons({ id, length }){
    const spacing = Number(id) > 1 ? 'justify-between' : 'justify-end'; 
    return (
        <div className={`mx-auto my-2 w-5/6 flex ${spacing}`}>
            {Number(id) > 1 &&
                <Link href={`/articles/${Number(id) - 1}`} passHref>
                    <button className={'btn-purple'}>
                    Previous
                    </button>
                </Link>
            }
            {Number(id) < length &&
                <Link href={`/articles/${Number(id) + 1}`} passHref>
                    <button className={'btn-purple'}>
                    Next
                    </button>
                </Link>
            }
        </div>
    )
}