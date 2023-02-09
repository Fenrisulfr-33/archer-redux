export default function MDXWrapper({ children }) {
    return(
        <div className={'p-prose h1-prose h2-prose h3-prose h4-prose wrap-prose a-prose code-prose width-prose'}>
            {children}
        </div>
    )
}