import style from './Loading.module.css';

export default function Loading() {
    return (
        <div className={style.loader}>
            <div className={'bg-purple-200 p-5 rounded-full flex space-x-3'}>
                <div className={'bg-gray-800 w-5 h-5 rounded-full animate-bounce'}></div>
                <div className={'bg-gray-800 w-5 h-5 rounded-full animate-bounce'}></div>
                <div className={'bg-gray-800 w-5 h-5 rounded-full animate-bounce'}></div>
            </div>
        </div>
    )
}