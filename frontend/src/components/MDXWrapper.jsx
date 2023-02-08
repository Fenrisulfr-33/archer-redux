const style = {
    mdxWrapper: 'py-10 text-sm text-gray-300 text-left m-auto prose', 
    mdxh1: 'prose-h1:text-orange-300 prose-h1:text-opacity-80 prose-h1:font-extrabold prose-h1:phone:text-3xl',
    mdxh2: 'prose-h2:pl-8 prose-h2:text-purple-300 prose-h2:text-opacity-80 prose-h2:font-extrabold prose-h2:phone:text-3xl', 
    mdxh3: 'prose-h3:pl-16 prose-h3:text-sky-400 prose-h3:text-opacity-80 prose-h3:font-extrabold prose-h3:phone:text-2xl',
    mdxh4: 'prose-h4:pl-24 prose-h4:text-teal-300 prose-h4:text-opacity-80 prose-h4:font-extrabold prose-h4:phone:text-2xl',
    mdxp: 'prose-p:bg-gray-700 prose-p:bg-opacity-70 prose-p:py-2 prose-p:rounded-xl prose-p:phone:px-20 prose-p:font-mono',
    mdxa: 'prose-a:text-purple-400 prose-a:italic prose-a:no-underline',
    mdxcode: 'prose-pre:text-left prose-code:text-sky-300 prose-code:rounded-xl prose-code:px-2',
    mdxwidth: 'phone:max-w-xl tablet:max-w-4xl laptop:max-w-5xl desktop:max-w-6xl wide:max-w-7xl',
}

export default function MDXWrapper({ children }) {
    return(
        <div className={`
            prose-h4:pl-
            ${style.mdxWrapper} 
            ${style.mdxh1}
            ${style.mdxh2}
            ${style.mdxh3}
            ${style.mdxh4} 
            ${style.mdxp}
            ${style.mdxa}
            ${style.mdxcode}
            ${style.mdxwidth}`
        }>
            {children}
        </div>
    )
}