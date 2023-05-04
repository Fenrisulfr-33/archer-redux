export default function MDXWrapper({ children }) {
    return(
        <div className={'p-prose h1-prose prose-h1:text-gray-300 h2-prose prose-h2:text-gray-300 h3-prose prose-h3:text-gray-300 h4-prose prose-h4:text-gray-300 wrap-prose a-prose code-prose width-prose'}>
            {children}
        </div>
    )
}