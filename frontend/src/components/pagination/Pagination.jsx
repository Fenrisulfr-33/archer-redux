export default function Pagination({ recordsPerPage, totalCount, paginate, currentPage }){
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCount/recordsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav className='flex flex-row space-x-1 overflow-x-auto scrollbar-hide'>
            {pageNumbers.map((page) => (
                <button key={page} 
                    className={page === currentPage ? `test-button border-2 border-purp-100` : 'test-button'} 
                    onClick={() => paginate(page)}
                >
                    {page}
                </button>
            ))}
        </nav>
    )

}