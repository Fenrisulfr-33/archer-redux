const styles = {
    main: 'prose m-auto py-20 px-5 text-sm text-gray-300 text-center',
    h1: 'prose-h1:text-orange-300 prose-h1:text-opacity-80 prose-h1:font-extrabold prose-h1:phone:text-3xl',
    h2: 'prose-h2:text-purple-300 prose-h2:text-opacity-80 prose-h2:font-extrabold prose-h2:phone:text-3xl',
    h3: 'prose-h3:text-sky-400 prose-h3:text-opacity-80 prose-h3:font-extrabold prose-h3:phone:text-2xl',
    h4: 'prose-h4:text-teal-300 prose-h4:text-opacity-80 prose-h4:font-extrabold prose-h4:phone:text-2xl',
    p: 'prose-p:bg-gray-700 prose-p:bg-opacity-70 prose-p:py-2 prose-p:rounded-xl prose-p:phone:px-20 prose-p:font-mono',
    a: 'prose-a:text-purple-400 prose-a:italic prose-a:no-underline',
    pre: 'prose-pre:text-left',
    code: 'prose-code:text-sky-300 prose-code:rounded-xl prose-code:px-2',
    size: 'phone:max-w-xl tablet:max-w-4xl laptop:max-w-5xl desktop:max-w-6xl wide:max-w-7xl',
},{ main, h1, h2, h3, h4, p, a, pre, code, size } = styles,
style = main+h1+h2+h2+h3+h4+p+a+pre+code+size;

export default function Article({ children }) {
    // TODO: Add slug in here for id
    return(
        <div className={style}>
            {children}
        </div>
    )
}